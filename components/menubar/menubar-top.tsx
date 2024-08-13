import React from "react";
import BeansLogo from "../sidebar/beans-logo";
import { MenubarItem } from "./menubar-item";
import UserAvatar from "../user/user_avatar";
import { currentUser } from "@clerk/nextjs/server";

export default async function MenubarTop() {
  const user = await currentUser();

  return (
    <div className={"flex items-center gap-2 py-2 px-4 select-none"}>
      <BeansLogo />

      <div className="flex-1 flex justify-end">
        <MenubarItem
          icon={
            <UserAvatar
              className="w-8 h-8"
              src={user?.imageUrl ?? ""}
              fallback={{
                display: user?.fullName?.[0] ?? "d",
              }}
            />
          }
          label="Profile"
        />
      </div>
    </div>
  );
}
