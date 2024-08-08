"use client";

import React from "react";
import { DatabaseNote } from "@/types/note.types";
import SidebarGroup, {
  SidebarFallback,
} from "@/components/sidebar/sidebar-group";
import { Button } from "@/components/ui/button";
import Handshake1 from "@/components/icons/handshake-1";
import Trash1 from "@/components/icons/trash-1";
import {
  DynamicDialog,
  DynamicDialogContent,
  DynamicDialogTrigger,
} from "@/components/dialogs/dynamic-dialog";
import ShareNoteDialog from "@/components/dialogs/note/share-note-dialog";
import { deleteNote } from "@/utils/notes/delete";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NoteActionsProps {
  note: DatabaseNote;
}

export default function NoteActions({ note }: NoteActionsProps) {
  const router = useRouter();

  const handleDeleteNote = async () => {
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
    const data = deleteNote(note.id);

    toast.promise(data, {
      loading: "Deleting note...",
      success: "Note deleted successfully.",
      error: "Couldn't delete note. Please try again later.",
      duration: 4000,
    });

    router.push("/");
  };

  return (
    <div>
      <SidebarGroup
        title="Actions"
        fallback={
          <SidebarFallback title="No actions available">
            This is a shared notes so your actions are limited.
          </SidebarFallback>
        }
      >
        {note.isMine && (
          <DynamicDialog>
            <DynamicDialogTrigger variant={"ghost"} className={"justify-start"}>
              <Handshake1 width={"18"} height={"18"} strokewidth={1.3} />
              Write with Me
            </DynamicDialogTrigger>
            <DynamicDialogContent>
              <ShareNoteDialog noteId={note.id} />
            </DynamicDialogContent>
          </DynamicDialog>
        )}
        {note.isMine && (
          <Button
            variant={"ghost"}
            className={"justify-start"}
            onClick={handleDeleteNote}
          >
            <Trash1 width={"18"} height={"18"} strokewidth={1.3} />
            Delete note
          </Button>
        )}
      </SidebarGroup>
    </div>
  );
}
