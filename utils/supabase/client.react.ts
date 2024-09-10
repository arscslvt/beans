import { createClient } from "@supabase/supabase-js";

export const createReactSupabaseClient = (session: any) => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_KEY!,
        {
            global: {
                // Get the custom Supabase token from Clerk
                fetch: async (url, options = {}) => {
                    const clerkToken = session?.getToken({
                        template: "supabase",
                    });

                    console.log("Clerk token", clerkToken);

                    // Insert the Clerk Supabase token into the headers
                    const headers = new Headers(options?.headers);
                    headers.set("Authorization", `Bearer ${clerkToken}`);

                    // Now call the default fetch
                    return fetch(url, {
                        ...options,
                        headers,
                    });
                },
            },
        },
    );
};
