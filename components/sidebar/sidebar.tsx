import React from "react";
import Image from "next/image";

import SidebarLink from "@/components/sidebar/sidebar-link";
import SidebarGroup, {
  SidebarLoadingWrapper,
} from "@/components/sidebar/sidebar-group";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

import Magnifier3 from "@/components/icons/magnifier-3";

import Gear21 from "@/components/icons/gear-2-1";
import InboxArrowDown1 from "@/components/icons/inbox-arrow-down-1";
import House21 from "@/components/icons/house-2-1";

import BeansLogo from "@assets/logo/icon.svg";
import Link from "next/link";
import AuthUserButton from "./client/auth-user-button";
import { Button } from "../ui/button";
import ChevronLeft1 from "../icons/chevron-left-1";
import SidebarNotes from "./partial/sidebar-notes";
import SidebarSharedNotes from "./partial/sidebar-shared-notes";

export default function Sidebar() {
  return (
    <div
      className={
        "flex flex-col sticky top-0 left-0 h-dvh max-h-dvh min-w-64 w-64 bg-background"
      }
    >
      <div className={"flex flex-col flex-grow-0 flex-shrink-0 bg-background"}>
        <div
          className={
            "flex items-center justify-between gap-2 pt-6 pl-4 pr-2 select-none"
          }
        >
          <Link
            href={"/"}
            className={"hover:scale-105 active:scale-95 transition-transform"}
          >
            <Image
              src={BeansLogo}
              alt={"Beans Logo"}
              width={28}
              height={28}
              className={"pointer-events-none"}
            />
          </Link>

          <div>
            <Button size={"icon"} variant={"ghost"} className="w-6 h-6">
              <ChevronLeft1 />
            </Button>
          </div>
        </div>
        <SidebarGroup>
          <SidebarLink symbol={<Magnifier3 />} role={"button"} preview>
            Search
          </SidebarLink>
          <SidebarLink symbol={<House21 />} href={"/"}>
            Home
          </SidebarLink>
          <SidebarLink symbol={<InboxArrowDown1 />} preview>
            Inbox
          </SidebarLink>
          <SidebarLink symbol={<Gear21 />} preview>
            Settings
          </SidebarLink>
        </SidebarGroup>
      </div>

      <SidebarGroup className={"!py-0"}>
        <NewNoteButton />
      </SidebarGroup>

      <div className={"flex flex-col gap-2 relative flex-1 overflow-y-auto"}>
        <SidebarLoadingWrapper>
          <SidebarSharedNotes />
        </SidebarLoadingWrapper>

        <SidebarLoadingWrapper>
          <SidebarNotes />
        </SidebarLoadingWrapper>
      </div>
      <div
        className={
          "flex-1 flex flex-col flex-grow-0 flex-shrink-0 justify-end bg-background"
        }
      >
        <SidebarGroup>
          <AuthUserButton />
        </SidebarGroup>
      </div>
    </div>
  );
}

export { SidebarLink, SidebarGroup };
