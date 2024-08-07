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

export { deleteNote };
