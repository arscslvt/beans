"use server";

import { DatabaseNote } from "@/types/note.types";
import { DatabaseProfile } from "@/types/profiles.types";
import { createClient } from "@/utils/supabase/server";
import { revalidateTag } from "next/cache";

interface ShareNoteWithParams {
    noteId: DatabaseNote["id"];
    userId: DatabaseProfile["user_id"];
}

interface ShareNoteWithResponse {
    error: any[] | null;
}

const shareNoteWith = async (
    { noteId, userId }: ShareNoteWithParams,
): Promise<ShareNoteWithResponse> => {
    const supabase = createClient({
        tags: ["note-users"],
    });

    const { error } = await supabase.from("shared_notes").insert({
        note_id: parseInt(noteId as unknown as string),
        user_id: userId,
    });

    if (error) {
        console.error("Error sharing note: ", error);
        return { error: [error] };
    }

    revalidateTag("shared-with");

    return { error: null };
};

export { shareNoteWith };
