"use server";

import {createClient} from "@/utils/supabase/server";
import {DatabaseNote} from "@/types/note.types";
import {revalidateTag} from "next/cache";
import {PostgrestError} from "@supabase/supabase-js";
import {DatabaseSource} from "@/types/source.types";

export interface NoteResponse {
    data?: DatabaseNote;
    error?: PostgrestError;
}

export interface SourceResponse {
    data?: DatabaseSource;
    error?: PostgrestError;
}

const createNote = async (fields: Partial<DatabaseNote>): Promise<NoteResponse> => {
    const supabase = createClient();

    const {data, error} = await supabase.from("notes").insert({
        ...fields
    }).select().single();

    revalidateTag("notes");

    console.log("Created note data: ", data, error);

    return {data: data ?? undefined, error: error ?? undefined};
}

const saveNote = async (id: DatabaseNote["id"], fields: Partial<DatabaseNote>):Promise<NoteResponse> => {
    const supabase = createClient();

    const {data, error} = await supabase.from("notes").update({
        ...fields
    }).eq("id", id).select().single();

    revalidateTag("notes");

    console.log("Updated note data: ", data, error);

    return {data: data ?? undefined, error: error ?? undefined};
}

const createSource = async (fields: Partial<DatabaseSource>): Promise<SourceResponse> => {
    const supabase = createClient();

    const {data, error} = await supabase.from("sources").insert({
        ...fields
    }).select().single();

    console.log("Created source data: ", data, error);

    revalidateTag(`note-${fields.note_id}`);

    return {data: data ?? undefined, error: error ?? undefined};
}

const saveSource = async (id: DatabaseSource["id"], fields: Partial<DatabaseSource>):Promise<SourceResponse> => {
    const supabase = createClient();
    const {data, error} = await supabase.from("sources").update({
        ...fields
    }).eq("id", id);

    console.log("Updated source data: ", data, error);

    revalidateTag(`note-${fields.note_id}`);

    return {data: data ?? undefined, error: error ?? undefined};
}

export {createNote, saveNote, createSource, saveSource};