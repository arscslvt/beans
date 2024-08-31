"use server";

import { DatabaseProfile } from "@/types/profiles.types";
import { DatabaseProfileRoles, DatabaseRole } from "@/types/role.types";
import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";

interface SearchProfileParams {
  search: string;
}

interface SearchProfileResponse {
  profiles: DatabaseProfile[] | null;
  errors: any[];
}

const profilesClient = createClient({
  tags: ["profiles-list"],
});

const searchProfiles = async (
  { search }: SearchProfileParams,
): Promise<SearchProfileResponse> => {
  const { userId } = auth();

  if (!userId) {
    return { profiles: null, errors: ["User not authenticated"] };
  }

  const { data, error } = await profilesClient
    .from("profiles")
    .select()
    .or(`full_name.ilike.%${search}%, handle.ilike.%${search}%`)
    .neq("user_id", userId)
    .limit(10);

  if (error) {
    console.error("Error fetching profiles: ", error);
    return { profiles: null, errors: [error] };
  }

  if (!data) {
    return { profiles: null, errors: [] };
  }

  console.log("Profiles: ", data);

  return { profiles: data, errors: [] };
};

export interface GetSessionProfileResponse {
  profile: DatabaseProfileRoles | null;
  errors: any[];
}

const getSessionProfile = async (): Promise<GetSessionProfileResponse> => {
  const { userId } = auth();

  if (!userId) {
    return { profile: null, errors: ["User not authenticated"] };
  }

  const { data, error } = await profilesClient
    .from("profiles")
    .select(`*, role:roles(*)`)
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching profile: ", error);
    return { profile: null, errors: [error] };
  }

  if (!data) {
    return { profile: null, errors: [] };
  }

  return { profile: data, errors: [] };
};

export { getSessionProfile, searchProfiles };
