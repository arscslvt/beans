"use client";

import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DatabaseNote } from "@/types/note.types";
import { revokeCollaborating } from "@/utils/notes/delete";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useNote } from "@/hooks/useNote";

const NoteDropdown = ({ id, isMine }: DatabaseNote) => {
  const router = useRouter();

  const { deleteNote } = useNote();

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
    <DropdownMenuContent
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <DropdownMenuItem onClick={() => router.push(`notes/${id}`)}>
        Edit
      </DropdownMenuItem>
      {!isMine && (
        <DropdownMenuItem
          className="justify-start"
          onClick={() => handleRevokeCollaboration()}
        >
          Stop collaborating
        </DropdownMenuItem>
      )}
      {isMine && (
        <DropdownMenuItem
          className={
            "text-destructive hover:!bg-destructive hover:!text-destructive-foreground"
          }
          onSelect={() => deleteNote(id)}
        >
          Delete
        </DropdownMenuItem>
      )}
    </DropdownMenuContent>
  );
};

export default NoteDropdown;
