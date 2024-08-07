"use client";

import React from "react";
import SidebarLink from "../sidebar-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthUserDropdown from "@/components/dropdowns/auth-user-dropdown";

export default function AuthUserButton() {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <AuthUserDropdown />
      <DropdownMenuTrigger className="outline-none">
        <SidebarLink>
          <div className={"flex items-center gap-2 justify-start text-left"}>
            <Avatar className={"w-8 h-8"}>
              <AvatarImage
                src={user?.imageUrl || ""}
                alt={`${user?.firstName ?? "User"} profile picture`}
              />
              <AvatarFallback>
                {user?.firstName?.charAt(0).toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>

            <div>
              <h4 className={"font-medium"}>{user?.firstName}</h4>
              <p className={"text-xs text-muted-foreground pt-0.5"}>
                Edit your profile
              </p>
            </div>
          </div>
        </SidebarLink>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
