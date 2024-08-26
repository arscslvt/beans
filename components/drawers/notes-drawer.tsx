"use client";

import React from "react";
import { DrawerContent } from "@/components/ui/drawer";
import { SidebarGroup, SidebarLink } from "@/components/sidebar/sidebar";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

import SidebarLinkDropdown from "../sidebar/client/siderbar-link-dropdown";
import { useNote } from "@/hooks/useNote";

interface NotesDrawerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

export default function NotesDrawer({}: NotesDrawerProps) {
  const { notes, sharedNotes } = useNote();

  return (
    <DrawerContent className="pb-3">
      <SidebarGroup>
        <NewNoteButton />
      </SidebarGroup>

      {!!sharedNotes.list.length && (
        <SidebarGroup title="Shared">
          {sharedNotes.list.map((note) => (
            <SidebarLink trailing={<SidebarLinkDropdown note={note.note!} />}>
              {note?.note?.title}
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
        {notes.list.map((note) => (
          <SidebarLink trailing={<SidebarLinkDropdown note={note} />}>
            {note.title}
          </SidebarLink>
        ))}
      </SidebarGroup>
    </DrawerContent>
  );
}
