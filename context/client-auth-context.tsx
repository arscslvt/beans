"use client";

import { betaRoles } from "@/lib/defaults/roles";
import { DatabaseProfileRoles } from "@/types/role.types";
import { getSessionProfile } from "@/utils/profiles/get";
import { createReactSupabaseClient } from "@/utils/supabase/client.react";
import { useSession } from "@clerk/nextjs";
import { SupabaseClient } from "@supabase/supabase-js";
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

  const supabase = useMemo(() => createReactSupabaseClient(session), [session]);

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

  if (!supabase) {
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
