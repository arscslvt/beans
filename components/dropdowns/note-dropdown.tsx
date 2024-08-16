"use client";

import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DatabaseNote } from "@/types/note.types";
import { deleteNote, revokeCollaborating } from "@/utils/notes/delete";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const NoteDropdown = ({ id, isMine }: DatabaseNote) => {
  const router = useRouter();

  const requestDeleteNote = async () => {
    const data = deleteNote(id);

    toast.promise(data, {
      loading: "Deleting note...",
      success: "Note deleted successfully.",
      error: "Couldn't delete note. Please try again later.",
      duration: 4000,
    });

    router.push("/");
  };

  const handleDeleteNote = async (e: Event) => {
    e.stopPropagation();

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

  const handleRevokeCollaboration = async (direct?: boolean) => {
    if (!direct) {
      return toast("Are you sure?", {
        description: "You'll have to be re-invited to collaborate again",
        action: (
          <Button
            size={"sm"}
            onClick={() => {
              handleRevokeCollaboration(true);
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

    const data = revokeCollaborating(id);

    toast.promise(data, {
      loading: "Revoking collaboration...",
      success: "Collaboration revoked successfully.",
      error: "Couldn't revoke collaboration. Please try again later.",
      duration: 4000,
    });
  };

  return (
    <DropdownMenuContent>
      <DropdownMenuItem onClick={() => router.push(`notes/${id}`)}>
        Edit
      </DropdownMenuItem>
      {!isMine && (
        <DropdownMenuItem
          className="justify-start"
          onClick={() => handleRevokeCollaboration(false)}
        >
          Stop collaborating
        </DropdownMenuItem>
      )}
      {isMine && (
        <DropdownMenuItem
          className={
            "text-destructive hover:!bg-destructive hover:!text-destructive-foreground"
          }
          onSelect={handleDeleteNote}
        >
          Delete
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  );
};

export default NoteDropdown;
