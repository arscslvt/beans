"use client";
import React from "react";

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
import { deleteNote as deleteNoteAPI } from "@/utils/notes/delete";
import { getNoteById as getNoteByIdAPI } from "@/utils/notes/get";
import { createNote as createNoteAPI } from "@/utils/notes/save";

interface NoteContextProps {
  note: DatabaseNote | null;
  newNote: () => void;
  deleteNote: () => void;
  openWriteWithMeDialog: () => void;
}

export const NoteContext = React.createContext<NoteContextProps>(
  {} as NoteContextProps
);

function NoteProvider({ children }: { children: Readonly<React.ReactNode> }) {
  const [note, setNote] = React.useState<DatabaseNote | null>(null);
  const [dialog, setDialog] = React.useState<DynamicDialogHandlerProps | null>(
    null
  );

  const { id: noteId } = useParams<{ id: string }>();

  const router = useRouter();

  const fetchNote = async () => {
    const { note } = await getNoteByIdAPI(noteId as unknown as number);
    setNote(note ?? null);
  };

  React.useEffect(() => {
    if (!noteId) {
      return setNote(null);
    }

    fetchNote();
  }, [noteId]);

  const deleteNote = async () => {
    toast("You sure?", {
      classNames: {},
      description: "This action is irreversible.",
      action: (
        <Button
          size={"sm"}
          onClick={() => {
            requestDeleteNote();
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

  const requestDeleteNote = async () => {
    if (!note) return;

    const data = deleteNoteAPI(note.id);

    toast.promise(data, {
      loading: "Deleting note...",
      success: "Note deleted successfully.",
      error: "Couldn't delete note. Please try again later.",
      duration: 4000,
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
    const { data: note, error } = await createNoteAPI({
      title: "New Note",
    });

    if (error) {
      console.error("Error creating note: ", error);
      return toast.error("Error creating note.");
    }

    if (!note) return toast.error("Error creating note.");

    toast.success("New note created.");
    return router.push(`${NOTE_ROUTE}/${note.id}`);
  };

  return (
    <NoteContext.Provider
      value={{ note, newNote, deleteNote, openWriteWithMeDialog }}
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
