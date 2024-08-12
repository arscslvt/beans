"use server";

import { createStdPowerClient } from "@/utils/supabase/server";
import { clerkClient, SessionJSON, UserJSON } from "@clerk/nextjs/server";
import { faker } from "@faker-js/faker";

const createProfileFromClerk = async (user: UserJSON) => {
    const profileHandler = createStdPowerClient();

    const generatedHandle = faker.internet.userName({
        firstName: user?.first_name ?? undefined,
        lastName: user?.last_name ?? undefined,
    });

    const { data, error } = await profileHandler.from("profiles").upsert({
        handle: user.username ?? generatedHandle,
        user_id: user.id,
        full_name: [user.first_name, user.last_name].join(" "),
        email: user.email_addresses[0].email_address,
        avatar: user.image_url,
        visible: true,
    }).select().single();

    if (error) {
        throw new Error(error.message, {
            cause: error,
        });
    }

    return data;
};

const migrateProfileFromClerk = async (session: SessionJSON) => {
    const migrationHandler = createStdPowerClient();

    const { data } = await migrationHandler.from("profiles").select().eq(
        "user_id",
        session.user_id,
    ).single();

    if (data) return data;

    try {
        const clerk = clerkClient();

        const clerkUser = await clerk.users.getUser(session.user_id);

        if (!clerkUser) {
            throw new Error("User not found in Clerk");
        }

        const generatedHandle = faker.internet.userName({
            firstName: clerkUser?.firstName ?? undefined,
            lastName: clerkUser?.lastName ?? undefined,
        });

        return await migrationHandler.from("profiles").insert({
            handle: clerkUser.username ?? generatedHandle,
            user_id: clerkUser.id,
            full_name: [clerkUser.firstName, clerkUser.lastName].join(" "),
            email: clerkUser.emailAddresses[0].emailAddress,
            avatar: clerkUser.imageUrl,
            visible: true,
        });
    } catch (e) {
        throw new Error("Error fetching user from Clerk", {
            cause: e,
        });
    }
};

export { createProfileFromClerk, migrateProfileFromClerk };
