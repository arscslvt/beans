"use server";

import {createClient} from "@/utils/supabase/server";
import {revalidateTag} from "next/cache";
import {NoteResponse} from "@/utils/notes/save";
import {DatabaseNote} from "@/types/note.types";

const deleteNote = async (id: DatabaseNote["id"]):Promise<NoteResponse> => {
    const supabase = createClient();

    const {data, error} = await supabase.from("notes").delete().eq("id", id);

    console.log("Deleted note: ", data, error);

    revalidateTag("notes");

    return {data: data ?? undefined, error: error ?? undefined};
}

export {deleteNote};