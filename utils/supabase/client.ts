import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/database.types";

export const createClient = (token: string, disableCache = false) => {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = token;

          // Insert the Clerk Supabase token into the headers
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);
          if (disableCache) {
            headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
          }

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
