"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidateTag } from "next/cache";
import { NoteResponse } from "@/utils/notes/save";
import { DatabaseNote } from "@/types/note.types";
import { auth, currentUser } from "@clerk/nextjs/server";
import { DatabaseProfile } from "@/types/profiles.types";

const deleteNote = async (id: DatabaseNote["id"]): Promise<NoteResponse> => {
  const supabase = createClient();

  const { data, error } = await supabase.from("notes").delete().eq("id", id)
    .select();

  console.log("Deleted note: ", data, error);

  revalidateTag("notes");

  if (error) {
    throw new Error(error.message);
  }

  if (!data.length) {
    throw new Error("Cannot delete note. Please try again later.");
  }

  return { data: undefined, error: error ?? undefined };
};

const revokeSharing = async (
  noteId: DatabaseNote["id"],
  userId?: DatabaseProfile["user_id"],
) => {
  console.log("Revoking sharing: ", noteId, userId);

  const supabase = createClient();

  const { userId: auth_uid } = auth();

  if (!auth_uid) {
    console.error("User not authenticated");
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase.from("shared_notes").delete().eq(
    "note_id",
    noteId,
  ).eq("user_id", userId ?? auth_uid)
    .select();

  console.log("Revoked sharing: ", data, error);

  revalidateTag("shared-with");

  if (error) {
    console.error("Error revoking sharing: ", error);
    throw new Error(error.message);
  }

  if (!data.length) {
    console.error("Cannot revoke sharing. Please try again later.");
    throw new Error("Cannot revoke sharing. Please try again later.");
  }

  return { data: undefined, error: error ?? undefined };
};

const revokeCollaborating = async (
  noteId: DatabaseNote["id"],
) => {
  console.log("Revoking collaboration: ", noteId);

  return await revokeSharing(noteId);
};

export { deleteNote, revokeCollaborating, revokeSharing };
