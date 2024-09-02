"use client";
import React, { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { DatabaseNote } from "@/types/note.types";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  DynamicDialog,
  DynamicDialogContent,
  DynamicDialogDescription,
  DynamicDialogFooter,
  DynamicDialogHeader,
  DynamicDialogTitle,
} from "@/components/dialogs/dynamic-dialog";
import { DynamicDialogHandlerProps } from "@/types/ui/dynamic-dialog.types";
import ShareNoteDialog from "@/components/dialogs/note/share-note-dialog";

import { NOTE_ROUTE } from "@/utils/constants/routes";
import {
  deleteNote as deleteNoteAPI,
  revokeCollaborating as revokeCollaboratingAPI,
} from "@/utils/notes/delete";
import {
  getNoteById as getNoteByIdAPI,
  getNotes as getNotesAPI,
  getSharedNotes,
  SharedNoteResponse,
} from "@/utils/notes/get";
import { createNote as createNoteAPI, saveEdits } from "@/utils/notes/save";
import { DatabaseProfile } from "@/types/profiles.types";
import { JSONContent } from "@tiptap/react";
import { useClientAuth } from "./client-auth-context";
import { useUser } from "@clerk/nextjs";

type ContextNotes = {
  list: DatabaseNote[];
  loading: boolean;
};

type ContextSharedNotes = {
  list: SharedNoteResponse[];
  loading: boolean;
};

interface NoteContextProps {
  note: DatabaseNote | null;
  notes: ContextNotes;
  sharedNotes: ContextSharedNotes;
  isSaving: boolean;
  withCollaboration: boolean;
  newNote: () => void;
  saveNote: (content: JSONContent) => Promise<void>;
  deleteNote: (id?: DatabaseNote["id"]) => void;
  revokeCollaboration: () => void;
  openWriteWithMeDialog: () => void;
}

export const NoteContext = React.createContext<NoteContextProps>(
  {} as NoteContextProps
);

function NoteProvider({ children }: { children: Readonly<React.ReactNode> }) {
  const [notes, setNotes] = React.useState<ContextNotes>({
    list: [],
    loading: true,
  });
  const [sharedNotes, setSharedNotes] = React.useState<ContextSharedNotes>({
    list: [],
    loading: true,
  });

  const [isSaving, setIsSaving] = React.useState(false);

  const [note, setNote] = React.useState<DatabaseNote | null>(null);

  const [dialog, setDialog] = React.useState<DynamicDialogHandlerProps | null>(
    null
  );

  const { id: noteId } = useParams<{ id: string }>();

  const router = useRouter();

  const { supabase } = useClientAuth();
  const { user } = useUser();

  const withCollaboration = useMemo(() => {
    return note?.created_by !== user?.id;
  }, [note, user]);

  const fetchNote = async () => {
    const { note } = await getNoteByIdAPI(noteId as unknown as number);
    setNote(note ?? null);
  };

  /**
   * Fetch all notes of authenticated user from the database
   * @param page - Page number to fetch
   * @param limit - Number of notes to fetch
   * @returns {Promise<void>}
   */
  const fetchNotes = async ({
    page = 1,
    limit = 10,
  }: {
    page: number;
    limit: number;
  }): Promise<void> => {
    const { data, error } = await getNotesAPI({ page, limit });

    if (error) {
      console.error("Error fetching notes: ", error);

      toast.error("Error fetching notes.", {
        description: "Please try again later or send a feedback.",
      });

      return setNotes({ list: [], loading: false });
    }

    return setNotes({ list: data ?? [], loading: false });
  };

  /**
   * Fetch all shared notes of authenticated user from the database
   * @param page - Page number to fetch
   * @param limit - Number of notes to fetch
   * @returns {Promise<void>}
   */
  const fetchSharedNotes = async ({
    page = 1,
    limit = 10,
  }: {
    page: number;
    limit: number;
  }): Promise<void> => {
    const { notes, error } = await getSharedNotes();

    if (error) {
      console.error("Error fetching shared notes: ", error);

      toast.error("Error fetching shared notes.", {
        description: "Please try again later or send a feedback.",
      });

      return setSharedNotes({ list: [], loading: false });
    }

    return setSharedNotes({ list: notes, loading: false });
  };

  React.useEffect(() => {
    fetchNotes({ page: 1, limit: 10 });
    fetchSharedNotes({ page: 1, limit: 10 });
  }, []);

  React.useEffect(() => {
    if (!noteId) {
      return setNote(null);
    }
    fetchNote();
  }, [noteId]);

  React.useEffect(() => {
    if (!note || !supabase) return;

    const notesChannel = supabase
      .channel("notes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "notes",
          filter: `id=eq.${note.id}`,
        },
        (payload) => {
          console.log("Change received!", payload);

          const newNote = payload.new as DatabaseNote;

          const updatedNote = {
            ...note,
            title: newNote.title,
            description: newNote.description,
            emoji: newNote.emoji,
            icon: newNote.icon,
          };

          setNote(updatedNote);
          updateNotesState(note.id, updatedNote);
        }
      )
      .subscribe();

    notesChannel.send({
      type: "broadcast",
      event: `Client connected to notes channel for note ${note.id}`,
      payload: {
        note: note.id,
        user: user?.id,
      },
    });

    return () => {
      notesChannel.unsubscribe();
    };
  }, [note, supabase]);

  const saveNote = async (content: JSONContent): Promise<void> => {
    if (!note) throw new Error("No note found.");

    setIsSaving(true);

    const { error } = await saveEdits(note.id, {
      content: JSON.parse(JSON.stringify(content)),
    });

    if (error) {
      console.error("Error saving source: ", error);
      toast.error("Error saving source.");

      setIsSaving(false);
      throw new Error("Error saving source.");
    }

    setIsSaving(false);
  };

  const updateNotesState = (
    noteId: DatabaseNote["id"],
    note: Partial<DatabaseNote>
  ) => {
    setNotes({
      list: notes.list.map((n) => {
        if (n.id === noteId) {
          return {
            ...n,
            ...note,
          };
        }

        return n;
      }),
      loading: false,
    });
  };

  const deleteNote = async (id?: DatabaseNote["id"]) => {
    const deleteId = id ?? note?.id;

    if (!deleteId) {
      return toast.error("No note found to delete.");
    }

    toast("You sure?", {
      classNames: {},
      description: "This action is irreversible.",
      action: (
        <Button
          size={"sm"}
          onClick={async () => {
            await requestDeleteNote(deleteId);
            toast.dismiss();
          }}
        >
          100% sure
        </Button>
      ),
      cancel: (
        <Button
          size={"sm"}
          variant={"secondary"}
          onClick={() => toast.dismiss()}
        >
          Nevermind
        </Button>
      ),
    });
  };

  const requestDeleteNote = async (id: DatabaseNote["id"]) => {
    const data = deleteNoteAPI(id);

    toast.promise(data, {
      loading: "Deleting note...",
      success: "Note deleted",
      error: "Couldn't delete note. Please try again later.",
      duration: 4000,
    });

    setNotes({
      list: notes.list.filter((n) => n.id !== id),
      loading: false,
    });

    router.push("/");
  };

  const openWriteWithMeDialog = () => {
    if (!note) return;

    setDialog({
      title: "Write with Me",
      description: "Share this note with others and write together.",
      children: <ShareNoteDialog noteId={note.id} />,
      onConfirm: {
        action: () => {},
        text: "Share",
      },
      onCancel: {
        action: () => setDialog(null),
        text: "Cancel",
      },
    });
  };

  const newNote = async () => {
    const { data: createdNote, error } = await createNoteAPI({
      title: "New Note",
    });

    createdNote &&
      setNotes({
        list: [{ ...createdNote, isMine: true }, ...notes.list],
        loading: false,
      });

    if (error) {
      console.error("Error creating note: ", error);
      return toast.error("Error creating note.");
    }

    if (!createdNote) return toast.error("Error creating note.");

    return router.push(`${NOTE_ROUTE}/${createdNote.id}`);
  };

  const revokeCollaboration = async (
    user?: DatabaseProfile["user_id"],
    direct?: boolean
  ) => {
    if (!note) return;

    if (!direct) {
      return toast("Are you sure?", {
        classNames: {},
        description: "You'll have to be re-invited to collaborate again.",
        action: (
          <Button
            size={"sm"}
            onClick={() => {
              revokeCollaboration(user, true);
              toast.dismiss();
            }}
          >
            100% sure
          </Button>
        ),
        cancel: (
          <Button
            size={"sm"}
            variant={"secondary"}
            onClick={() => toast.dismiss()}
          >
            Nevermind
          </Button>
        ),
      });
    }

    const data = revokeCollaboratingAPI(note.id);

    toast.promise(data, {
      loading: "Revoking sharing...",
      success: "Sharing revoked successfully.",
      error: "Couldn't revoke sharing. Please try again later.",
      duration: 4000,
    });
  };

  return (
    <NoteContext.Provider
      value={{
        note,
        notes,
        sharedNotes,
        isSaving,
        withCollaboration,
        newNote,
        saveNote,
        deleteNote,
        revokeCollaboration,
        openWriteWithMeDialog,
      }}
    >
      <DynamicDialog
        open={!!dialog}
        onOpenChange={(open) => setDialog(open ? dialog : null)}
      >
        <DynamicDialogContent>
          <DynamicDialogHeader>
            {dialog?.title && (
              <DynamicDialogTitle>{dialog.title}</DynamicDialogTitle>
            )}
            {dialog?.description && (
              <DynamicDialogDescription>
                {dialog.description}
              </DynamicDialogDescription>
            )}
          </DynamicDialogHeader>
          {dialog?.children}

          <DynamicDialogFooter>
            {dialog?.onCancel && (
              <Button variant={"ghost"} onClick={dialog.onCancel.action}>
                {dialog.onCancel.text}
              </Button>
            )}
            {dialog?.onConfirm && (
              <Button onClick={dialog.onConfirm.action}>
                {dialog.onConfirm.text}
              </Button>
            )}
          </DynamicDialogFooter>
        </DynamicDialogContent>
      </DynamicDialog>

      {children}
    </NoteContext.Provider>
  );
}

export default NoteProvider;
