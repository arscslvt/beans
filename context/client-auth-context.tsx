"use client";

import { useSession } from "@clerk/nextjs";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import React, { useMemo } from "react";

interface ClientAuthContext {
  supabase: SupabaseClient;
}

const ClientAuthContext = React.createContext<ClientAuthContext>(
  {} as ClientAuthContext
);

export default function ClientAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useSession();

  function createClerkSupabaseClient() {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!,
      {
        global: {
          // Get the custom Supabase token from Clerk
          fetch: async (url, options = {}) => {
            const clerkToken = await session?.getToken({
              template: "supabase",
            });

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
      }
    );
  }

  const supabase = useMemo(() => createClerkSupabaseClient(), [session]);

  if (!session) {
    return <></>;
  }

  return (
    <ClientAuthContext.Provider value={{ supabase }}>
      {children}
    </ClientAuthContext.Provider>
  );
}

export const useClientAuth = () => React.useContext(ClientAuthContext);
