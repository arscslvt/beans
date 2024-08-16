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
import { getNotes, getSharedNotes } from "@/utils/notes/get";
import { DatabaseNote } from "@/types/note.types";
import { useRouter } from "next/navigation";

import { NOTE_ROUTE } from "@/utils/constants/routes";
import { useNote } from "@/hooks/useNote";

export default function Cmdk() {
  const { isOpen, setIsOpen } = useCmdK();
  const router = useRouter();

  const { note, newNote, deleteNote, openWriteWithMeDialog } = useNote();

  const [notes, setNotes] = React.useState<DatabaseNote[]>([]);

  const memoizedNotes = useMemo(() => getNotes(), []);
  const memoizedSharedNotes = useMemo(() => getSharedNotes(), []);

  React.useEffect(() => {
    memoizedNotes.then((fetchedNotes) => {
      setNotes(fetchedNotes?.data ?? []);
    });
  }, [memoizedNotes]);

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

        <CommandGroup heading="Notes">
          {notes.map((note) => (
            <CommandItem key={note.id} onSelect={() => openNote(note)}>
              {note.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

const RedirectIcon = () => {
  return (
    <span className="ml-3 text-[0.65rem] uppercase px-1 rounded-md bg-accent/10 text-accent group-hover/cm-item:bg-accent-foreground/10 group-hover/cm-item:text-accent-foreground">
      redirect
    </span>
  );
};
