import {DatabaseNote} from "@/types/note.types";
import {DatabaseSource} from "@/types/source.types";
import {createClient} from "@/utils/supabase/server";

interface GetSourceByNoteResponse {
    sources: DatabaseSource[] | null;
    errors: any[];
}

const getSourcesByNote = async (noteId: DatabaseNote["id"]):Promise<GetSourceByNoteResponse>  => {
    const supabase = createClient({
        tags: [`note-${noteId}`]
    });

    const {data: sources, error} = await supabase
        .from("sources")
        .select()
        .eq("note_id", noteId)
        .order("created_at", {ascending: false});

    if (error) {
        console.error("Error getting sources: ", error);
        return {sources: null, errors: [error]};
    }

    return {sources, errors: []};
}

export {
    getSourcesByNote
};