"use server";

import { DatabaseFeatures } from "@/types/features.types";
import { createClient } from "../supabase/server";
import { auth } from "@clerk/nextjs/server";

const markUpdateAsRead = async (
    id: DatabaseFeatures["id"],
): Promise<Boolean> => {
    const supabase = createClient({
        tags: ["updates-list"],
    });

    const { userId } = auth();

    if (!userId) {
        throw new Error("User not found");
    }

    const { error } = await supabase.from("profiles").update({
        session_update: id,
    }).eq("user_id", userId);

    if (error) {
        throw new Error("Error marking update as read");
    }

    return true;
};

export { markUpdateAsRead };
