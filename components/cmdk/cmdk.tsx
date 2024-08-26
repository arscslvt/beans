"use client";

import { useCmdK } from "@/hooks/useCmdK";
import React, { useMemo } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { DatabaseNote } from "@/types/note.types";
import { useRouter } from "next/navigation";

import { NOTE_ROUTE } from "@/utils/constants/routes";
import { useNote } from "@/hooks/useNote";

export default function Cmdk() {
  const { isOpen, setIsOpen } = useCmdK();
  const router = useRouter();

  const {
    note,
    notes,
    sharedNotes,
    newNote,
    deleteNote,
    openWriteWithMeDialog,
  } = useNote();

  const openNote = (note: DatabaseNote) => {
    router.push(`${NOTE_ROUTE}/${note.id}`);
    setIsOpen(false);
  };

  const handler = async (fn: () => void) => {
    setIsOpen(false);
    await fn();
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="pb-1">
        <CommandEmpty>No results found.</CommandEmpty>
        {note && (
          <CommandGroup heading="This note">
            <CommandItem onSelect={() => handler(openWriteWithMeDialog)}>
              Invite to collaborate
            </CommandItem>
            <CommandItem onSelect={() => handler(deleteNote)}>
              Delete this note
            </CommandItem>
          </CommandGroup>
        )}

        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => handler(newNote)}>
            Create New Note
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/");
              setIsOpen(false);
            }}
          >
            Home
          </CommandItem>
          <CommandItem disabled>Inbox</CommandItem>
          <CommandItem
            className="group/cm-item"
            onSelect={() =>
              window.open(
                "https://github.com/arscslvt/beans/labels/feedback",
                "_blank"
              )
            }
          >
            Send a feedback
            <RedirectIcon />
          </CommandItem>
        </CommandGroup>
        {!!notes.list.length && (
          <CommandGroup heading="Notes">
            {notes.list.map((note) => (
              <CommandItem key={note.id} onSelect={() => openNote(note)}>
                {note.title}
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {!!sharedNotes.list.length && (
          <CommandGroup heading="Shared Notes">
            {sharedNotes.list.map((shared, i) => (
              <CommandItem
                key={i}
                onSelect={() => shared.note && openNote(shared.note)}
                className="flex flex-col items-start group/cm-item"
              >
                {shared.note?.title}
                <span className="text-xs font-medium text-muted-foreground group-aria-selected/cm-item:text-accent-foreground/60">
                  with {shared.sharedBy?.full_name ?? shared.sharedBy?.handle}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

const RedirectIcon = () => {
  return (
    <span className="ml-3 text-[0.65rem] uppercase px-1 rounded-md bg-accent/10 text-accent group-aria-selected/cm-item:bg-accent-foreground/10 group-aria-selected/cm-item:text-accent-foreground">
      redirect
    </span>
  );
};
