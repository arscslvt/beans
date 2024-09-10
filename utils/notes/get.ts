"use server";

import { DatabaseNote } from "@/types/note.types";
import { DatabaseProfile } from "@/types/profiles.types";
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
    .range((page - 1) * limit, page * limit)
    .order("created_at", { ascending: false });

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

  const { data: hasCollaboration, error: collabError } = await supabase.from(
    "shared_notes",
  ).select("*").eq("note_id", note.id).limit(1).maybeSingle();

  const isShared = !!hasCollaboration;

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

export type SharedNoteResponse = {
  note: DatabaseNote | null;
  sharedBy: DatabaseProfile | null;
  isMine: boolean;
};

interface GetSharedNotesResponse {
  notes: SharedNoteResponse[];
  error: any[] | null;
}

const getSharedNotes = async (
  props?: GetProps,
): Promise<GetSharedNotesResponse> => {
  const limit = props?.limit ?? 30;
  const page = props?.page ?? 1;

  const { userId } = auth();

  if (!userId) {
    return { notes: [], error: ["User not authenticated"] };
  }

  const supabase = createClient({
    tags: ["shared-notes"],
  });

  const { data: notes, error } = await supabase
    .from("shared_notes")
    .select(
      `invitedBy:profiles!by(*),
    user_id,
    note:notes(*)`,
    )
    .or(`by.is.null,by.neq.${userId}`)
    .limit(limit)
    .range((page - 1) * limit, page * limit);

  if (error) {
    console.error("Error fetching shared notes: ", error);
    return { notes: [], error: [error] };
  }

  // Transform the data to ensure invitedBy is a single object
  const transformedNotes: SharedNoteResponse[] = notes.map((note) => ({
    note: note?.note,
    sharedBy: note.invitedBy[0] || null,
    isMine: note.user_id === userId,
  }));

  return { notes: transformedNotes, error: null };
};

interface GetSharedWithResponse {
  profiles: DatabaseProfile[] | null;
  error: any[] | null;
}

const getSharedWith = async (
  noteId: DatabaseNote["id"],
): Promise<GetSharedWithResponse> => {
  const supabase = createClient({
    tags: ["shared-with"],
  });

  const { userId } = auth();

  const { data: profiles, error } = await supabase
    .from("shared_notes")
    .select("profiles!shared_notes_user_id_fkey(*)")
    .eq("note_id", noteId)
    .or(`user_id.neq.${userId}`);

  if (error) {
    console.error("Error fetching shared with: ", error);
    return { profiles: null, error: [error] };
  }

  if (!profiles) {
    return { profiles: null, error: null };
  }

  return {
    profiles: profiles.filter((p) => !!p.profiles).map((p) => p.profiles!),
    error,
  };
};

export { getNoteById, getNotes, getSharedNotes, getSharedWith };
