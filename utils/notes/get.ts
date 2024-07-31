import {DatabaseNote} from "@/types/note.types";
import {DatabaseSource} from "@/types/source.types";
import {createClient} from "@/utils/supabase/server";

interface GetProps {
    limit?: number;
    page?: number;
}

const getNotes = async (props?: GetProps) => {
    const limit = props?.limit ?? 10;
    const page = props?.page ?? 1;

    const supabase = createClient();

    return await supabase.from("notes").select().limit(limit).range((page - 1) * limit, page * limit);
}

interface GetNoteByIdResponse {
    note: DatabaseNote | null;
    sources: DatabaseSource[] | null;
    errors: any[];
}

const getNoteById = async (id: DatabaseNote["id"]):Promise<GetNoteByIdResponse> => {
    const supabase = createClient();

    const {data: note, error: note_error} = await supabase.from("notes").select().eq("id", id).limit(1).single();

    let errors = [];

    if (note_error) {
        errors.push(note_error);
    }

    if (!note)
        return {
            note: null, sources: [], errors
        };

    const {data: sources, error: sources_error} = await supabase.from("sources").select("*").eq("note_id", note.id).order("created_at", {ascending: false}).limit(5);

    if (sources_error) {
        errors.push(sources_error);
    }

    return {note, sources, errors};
}

export {getNotes, getNoteById};