"use client";

import React from "react";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

import Plug21 from "../icons/plug-2-1";
import { revokeSharing } from "@/utils/notes/delete";
import { DatabaseNote } from "@/types/note.types";
import { DatabaseProfile } from "@/types/profiles.types";
import { toast } from "sonner";

export default function SharedUserDropdown({
  noteId,
  userId,
}: {
  noteId: DatabaseNote["id"];
  userId: DatabaseProfile["user_id"];
}) {
  const handleRevokeAccess = async () => {
    const { error } = await revokeSharing(noteId, userId);

    if (error) {
      console.error("Error revoking sharing: ", error);
      return toast.error("Error revoking access. Please try again later.");
    }

    return toast.success("Access revoked successfully.");
  };

  return (
    <DropdownMenuContent side="bottom" align="end" className="min-w-40">
      <DropdownMenuItem
        className="focus:text-destructive focus:bg-destructive/10"
        onSelect={handleRevokeAccess}
      >
        <Plug21 width="14" height="14" />
        Revoke access
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
