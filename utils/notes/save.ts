"use server";

import { createClient } from "@/utils/supabase/server";
import { DatabaseNote } from "@/types/note.types";
import { revalidateTag } from "next/cache";
import { PostgrestError } from "@supabase/supabase-js";
import { DatabaseSource } from "@/types/source.types";

export interface NoteResponse {
    data?: DatabaseNote;
    error?: PostgrestError;
}

export interface SourceResponse {
    data?: DatabaseSource;
    error?: PostgrestError;
}

const createNote = async (
    fields: Partial<DatabaseNote>,
): Promise<NoteResponse> => {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("notes")
        .insert({
            ...fields,
        })
        .select()
        .single();

    revalidateTag("notes");

    console.log("Created note: ", data?.id, error);

    return { data: data ?? undefined, error: error ?? undefined };
};

const saveNote = async (
    id: DatabaseNote["id"],
    fields: Partial<DatabaseNote>,
): Promise<NoteResponse> => {
    const supabase = createClient();

    const { data, error } = await supabase.from("notes").update({
        title: fields.title?.trim(),
        description: fields.description?.trim(),
        emoji: fields.emoji?.[0],
        ...fields,
    }).eq("id", id).select().single();

    revalidateTag("notes");

    console.log("Updated note data: ", data?.id, error);

    return { data: data ?? undefined, error: error ?? undefined };
};

const saveEdits = async (
    id: DatabaseNote["id"],
    fields: Partial<DatabaseSource>,
): Promise<SourceResponse> => {
    const supabase = createClient();

    const { data: lastSource, error: lastSourceError } = await supabase
        .from("sources")
        .select(`id, last_edited_at`)
        .eq("note_id", id)
        .order("last_edited_at", { ascending: false })
        .limit(1)
        .maybeSingle();

    if (lastSourceError) {
        console.error("Error fetching last source: ", lastSourceError);
        return { error: lastSourceError };
    }

    if (!lastSource) {
        return await createSource({
            note_id: id,
            ...fields,
        });
    }

    const now = new Date();
    const fiveHoursDistance = 5 * 60 * 60 * 1000;

    const timeDistance = now.getTime() -
        new Date(lastSource.last_edited_at).getTime();

    if (timeDistance > fiveHoursDistance) {
        console.log(
            "Creating new source because of time distance: ",
            timeDistance,
        );
        return await createSource({
            note_id: id,
            ...fields,
        });
    } else {
        console.log("Saving to last source.");
        return await saveSource(lastSource.id, fields);
    }
};

const createSource = async (
    fields: Partial<DatabaseSource>,
): Promise<SourceResponse> => {
    const supabase = createClient();

    const { data, error } = await supabase.from("sources").insert({
        ...fields,
    }).select().single();

    console.log("Created source data: ", data, error);

    revalidateTag(`note-${fields.note_id}`);

    return { data: data ?? undefined, error: error ?? undefined };
};

const saveSource = async (
    id: DatabaseSource["id"],
    fields: Partial<DatabaseSource>,
): Promise<SourceResponse> => {
    const supabase = createClient();

    const { data, error } = await supabase.from("sources").update({
        last_edited_at: new Date().toISOString(),
        ...fields,
    }).eq("id", id);

    console.log("Updated source data: ", data, error);

    revalidateTag(`note-${fields.note_id}`);

    return { data: data ?? undefined, error: error ?? undefined };
};

export { createNote, createSource, saveEdits, saveNote, saveSource };
