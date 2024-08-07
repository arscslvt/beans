"use server";

import { DatabaseNote } from "@/types/note.types";
import { DatabaseSource } from "@/types/source.types";
import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";

interface GetProps {
  limit?: number;
  page?: number;
}

interface GetNotesResponse {
  data: DatabaseNote[] | null;
  error: any[] | null;
}

const getNotes = async (props?: GetProps): Promise<GetNotesResponse> => {
  const limit = props?.limit ?? 30;
  const page = props?.page ?? 1;

  const { userId } = auth();

  if (!userId) {
    return { data: null, error: ["User not authenticated"] };
  }

  const supabase = createClient({
    tags: ["notes"],
  });

  const { data, error } = await supabase
    .from("notes")
    .select(`*`)
    .eq("created_by", userId)
    .limit(limit)
    .range((page - 1) * limit, page * limit);

  if (error) {
    console.error("Error fetching notes: ", error);
    return { data: null, error: [error] };
  }

  if (!data) {
    return { data: null, error: [] };
  }

  return { data: data.map((d) => ({ ...d, isMine: true })), error };
};

interface GetNoteByIdResponse {
  note: DatabaseNote | null;
  sources: DatabaseSource[] | null;
  errors: any[];

  isShared?: boolean;
}

const getNoteById = async (
  id: DatabaseNote["id"],
): Promise<GetNoteByIdResponse> => {
  const supabase = createClient({
    tags: [`note-${id}`],
  });

  const { data: note, error: note_error } = await supabase.from("notes")
    .select(`*`).eq("id", id).limit(1).single();

  let errors = [];

  if (note_error) {
    errors.push(note_error);
  }

  if (!note) {
    return {
      note: null,
      sources: [],
      errors,
    };
  }

  const { data: sources, error: sources_error } = await supabase.from("sources")
    .select("*").eq("note_id", note.id).order("created_at", {
      ascending: false,
    }).limit(5);

  if (sources_error) {
    errors.push(sources_error);
  }

  const isShared = note.created_by !== auth().userId;

  return {
    note: {
      ...note,
      isMine: !isShared,
    },
    sources,
    errors,
    isShared,
  };
};

interface GetSharedNotesResponse {
  notes: DatabaseNote[] | null;
  error: any[] | null;
}

const getSharedNotes = async (
  props?: GetProps,
): Promise<GetSharedNotesResponse> => {
  const limit = props?.limit ?? 30;
  const page = props?.page ?? 1;

  const { userId } = auth();

  if (!userId) {
    return { notes: null, error: ["User not authenticated"] };
  }

  const supabase = createClient({
    tags: ["shared-notes"],
  });

  const { data: notes, error } = await supabase
    .from(`notes`)
    .select()
    .neq("created_by", userId)
    .limit(limit)
    .range((page - 1) * limit, page * limit);

  // console.log("[SB] Shared Notes: ", notes, error);

  if (error) {
    console.error("Error fetching shared notes: ", error);
    return { notes: null, error: [error] };
  }

  if (!notes) {
    return { notes: null, error: [] };
  }

  return { notes: notes.map((d) => ({ ...d, isMine: false })), error };
};

export { getNoteById, getNotes, getSharedNotes };
