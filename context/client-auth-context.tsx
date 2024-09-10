"use client";

import { betaRoles } from "@/lib/defaults/roles";
import { DatabaseProfile } from "@/types/profiles.types";
import { DatabaseProfileRoles } from "@/types/role.types";
import { getSessionProfile } from "@/utils/profiles/get";
import { useSession } from "@clerk/nextjs";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import React, { useMemo } from "react";

interface ClientAuthContext {
  supabase: SupabaseClient;
  profile: DatabaseProfileRoles | null;
  isBetaUser: boolean;
  loading: boolean;
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

  const [profile, setProfile] = React.useState<DatabaseProfileRoles | null>(
    null
  );

  const [loading, setLoading] = React.useState(true);

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

  const isBetaUser = useMemo(() => {
    return betaRoles.includes(profile?.role?.id || "");
  }, [profile]);

  const retrieveProfile = async () => {
    const { profile } = await getSessionProfile();
    profile && setProfile(profile);
  };

  React.useEffect(() => {
    if (profile) {
      return setLoading(false);
    }
    setLoading(true);
  }, [profile]);

  React.useEffect(() => {
    session && retrieveProfile();
  }, [session]);

  if (!session) {
    return <></>;
  }

  return (
    <ClientAuthContext.Provider
      value={{ supabase, profile, loading, isBetaUser }}
    >
      {children}
    </ClientAuthContext.Provider>
  );
}

export const useClientAuth = () => React.useContext(ClientAuthContext);
