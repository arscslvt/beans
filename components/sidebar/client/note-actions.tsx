"use client";

import React from "react";
import { DatabaseNote } from "@/types/note.types";
import SidebarGroup, {
  SidebarFallback,
} from "@/components/sidebar/sidebar-group";
import { Button } from "@/components/ui/button";
import Handshake1 from "@/components/icons/handshake-1";
import Trash1 from "@/components/icons/trash-1";
import { useRouter } from "next/navigation";
import { useNote } from "@/hooks/useNote";

interface NoteActionsProps {
  note: DatabaseNote;
}

export default function NoteActions({ note }: NoteActionsProps) {
  const { deleteNote, openWriteWithMeDialog } = useNote();

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
          <Button
            variant={"ghost"}
            className="justify-start"
            onClick={openWriteWithMeDialog}
          >
            <Handshake1 width={"18"} height={"18"} strokewidth={1.3} />
            Write with me
          </Button>
        )}
        {note.isMine && (
          <Button
            variant={"ghost"}
            className={"justify-start"}
            onClick={deleteNote}
          >
            <Trash1 width={"18"} height={"18"} strokewidth={1.3} />
            Delete note
          </Button>
        )}
      </SidebarGroup>
    </div>
  );
}
