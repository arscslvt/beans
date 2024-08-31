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
import { useSidebar } from "../sidebar";
import { motion } from "framer-motion";
import UserAvatar from "@/components/user/user_avatar";
import { useClientAuth } from "@/context/client-auth-context";
import { Badge } from "@/components/ui/badge";

export default function AuthUserButton() {
  const { profile, isBetaUser } = useClientAuth();

  const { sidebarMode } = useSidebar();

  const avatarAnimation = {
    small: { width: 22, height: 22 },
    large: { width: 32, height: 32 },
  };

  return (
    <DropdownMenu>
      <AuthUserDropdown />
      <DropdownMenuTrigger className="outline-none">
        <SidebarLink
          role="button"
          symbol={
            <motion.div
              variants={avatarAnimation}
              initial={"large"}
              animate={sidebarMode === "maximized" ? "large" : "small"}
            >
              <UserAvatar
                className={"w-full h-full shadow-sm"}
                fallback={{
                  display: profile?.full_name?.charAt(0).toUpperCase() ?? "U",
                }}
                src={profile?.avatar || ""}
                alt={`${profile?.full_name ?? "User"} profile picture`}
              />
            </motion.div>
          }
        >
          <div className={"flex items-center pl-2 justify-start text-left"}>
            <div>
              {isBetaUser && (
                <Badge
                  variant={"outline"}
                  className="text-[9px] px-1 py-0 mb-1 bg-background rounded-full text-muted-foreground"
                >
                  {profile?.role?.display_name}
                </Badge>
              )}
              <h4 className={"font-medium"}>{profile?.full_name}</h4>
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
