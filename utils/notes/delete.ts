"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidateTag } from "next/cache";
import { NoteResponse } from "@/utils/notes/save";
import { DatabaseNote } from "@/types/note.types";

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

const revokeSharing = async (noteId: DatabaseNote["id"], userId: string) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("user_notes").delete().eq(
    "note_id",
    noteId,
  ).eq("user_id", userId)
    .select();

  console.log("Revoked sharing: ", data, error);

  revalidateTag("shared-with");

  if (error) {
    throw new Error(error.message);
  }

  if (!data.length) {
    throw new Error("Cannot revoke sharing. Please try again later.");
  }

  return { data: undefined, error: error ?? undefined };
};

export { deleteNote, revokeSharing };
