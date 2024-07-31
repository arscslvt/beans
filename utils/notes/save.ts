import {createClient} from "@/utils/supabase/server";
import {DatabaseNote} from "@/types/note.types";

const saveNote = async (id: DatabaseNote["id"], fields: Partial<DatabaseNote>) => {
    const supabase = createClient();

    const {data, error} = await supabase.from("notes").upsert({
        ...fields
    }).eq("id", id);

    console.log("Updated note data: ", data, error);
}

export {saveNote};