"use server";

import { DatabaseFeatures, DatabaseUserFeatures } from "@/types/features.types";
import { createClient } from "../supabase/server";
import { auth } from "@clerk/nextjs/server";

interface UpdatesProps {
    query?: string;
    limit?: number;
    page?: number;
}

interface UpdatesResponse {
    updates: DatabaseFeatures[] | null;
    errors: any[];
}

const getUpdates = async (
    { query, limit = 10, page = 1 }: UpdatesProps = {},
): Promise<UpdatesResponse> => {
    const supabase = createClient({
        tags: ["updates-list"],
    });

    const { data, error } = await supabase
        .from("features")
        .select()
        .order("created_at", { ascending: false })
        .limit(limit)
        .range(page * limit - limit, page * limit);

    if (error) {
        console.error("Error fetching updates: ", error);
        return { updates: null, errors: [error] };
    }

    if (!data) {
        return { updates: null, errors: [] };
    }

    return { updates: data as DatabaseFeatures[], errors: [] };
};

const getUnreadUpdates = async (): Promise<DatabaseFeatures[]> => {
    const supabase = createClient({
        tags: ["updates-list"],
    });

    const { userId } = auth();

    if (!userId) {
        return [];
    }

    const { data: profile_update, error: profile_update_error } = await supabase
        .from("profiles")
        .select("session_update")
        .eq("user_id", userId)
        .single();

    let profile_session_update_data;

    const get_unreads_query = supabase
        .from("features")
        .select()
        .order("created_at", { ascending: false });

    if (profile_update?.session_update) {
        const { data } = await supabase.from("features")
            .select("created_at")
            .eq("id", profile_update.session_update)
            .maybeSingle();

        if (data) profile_session_update_data = data;

        const { data: unreads_updates, error } = await get_unreads_query.gt(
            "created_at",
            profile_session_update_data?.created_at,
        );

        return unreads_updates as DatabaseFeatures[] ?? [];
    }

    const { data: updates, error } = await get_unreads_query.limit(1).single();

    return updates ? [updates] as DatabaseFeatures[] : [];
};

const getFeatures = async (): Promise<DatabaseFeatures["feature_name"][]> => {
    const supabase = createClient({
        tags: ["features-list"],
    });

    const { userId } = auth();

    if (!userId) {
        return [];
    }

    const { data, error } = await supabase
        .from("user_features")
        .select(`
                features (feature_name)
            `)
        .eq("user_id", userId)
        .is("enabled", true);

    if (error) {
        console.error("Error fetching features: ", error);
        return [];
    }

    const features = data.map((feature) => feature.features?.feature_name);

    return features as DatabaseFeatures["feature_name"][];
};

export { getFeatures, getUnreadUpdates, getUpdates };
