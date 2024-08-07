"use server";

import { DatabaseProfile } from "@/types/profiles.types";
import { createClient } from "../supabase/server";
import { auth, currentUser } from "@clerk/nextjs/server";

interface CreateProfileProps extends Partial<DatabaseProfile> {
  handle: DatabaseProfile["handle"];
}

const profileHandler = createClient({
  tags: ["profile"],
});

const createProfile = async (profile: CreateProfileProps) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not authenticated.");
  }

  profile.user_id = userId;

  const user = await currentUser();

  if (!user) {
    throw new Error("User not found.");
  }

  const { data, error } = await profileHandler.from("profiles").insert({
    ...profile,
  }).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
