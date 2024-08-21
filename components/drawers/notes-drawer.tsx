import React from "react";
import { DrawerContent } from "@/components/ui/drawer";
import { SidebarGroup, SidebarLink } from "@/components/sidebar/sidebar";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

import { DatabaseNote } from "@/types/note.types";
import { getNotes, getSharedNotes } from "@/utils/notes/get";
import SidebarLinkDropdown from "../sidebar/client/siderbar-link-dropdown";

interface NotesDrawerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

export default function NotesDrawer({}: NotesDrawerProps) {
  const [sharedNotes, setSharedNotes] = React.useState<DatabaseNote[]>([]);
  const [notes, setNotes] = React.useState<DatabaseNote[]>([]);

  React.useEffect(() => {
    getNotes().then((notes) => {
      setNotes(notes.data ?? []);
    });

    getSharedNotes().then((sharedNotes) => {
      const _t =
        sharedNotes.notes
          ?.filter((note) => note.note !== null)
          .map((note) => note.note) ?? [];
      setSharedNotes(_t as DatabaseNote[]);
    });
  }, []);

  return (
    <DrawerContent className="pb-3">
      <SidebarGroup>
        <NewNoteButton />
      </SidebarGroup>

      {!!sharedNotes.length && (
        <SidebarGroup title="Shared">
          {sharedNotes.map((note) => (
            <SidebarLink trailing={<SidebarLinkDropdown note={note} />}>
              {note.title}
            </SidebarLink>
          ))}
        </SidebarGroup>
      )}

      <SidebarGroup
        title="Notes"
        className="py-0"
        fallback={
          <span className="text-sm text-muted-foreground">
            You don't have any notes yet. Click the button above to create one.
          </span>
        }
      >
        {notes.map((note) => (
          <SidebarLink trailing={<SidebarLinkDropdown note={note} />}>
            {note.title}
          </SidebarLink>
        ))}
      </SidebarGroup>
    </DrawerContent>
  );
}
