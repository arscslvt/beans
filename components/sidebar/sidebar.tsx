import React from "react";
import Image from "next/image";

import { getNotes, getSharedNotes } from "@/utils/notes/get";

import SidebarLink from "@/components/sidebar/sidebar-link";
import SidebarGroup from "@/components/sidebar/sidebar-group";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

import Scribble1 from "@/components/icons/scribble-1";
import Magnifier3 from "@/components/icons/magnifier-3";
import { EllipsisIcon } from "lucide-react";
import Gear21 from "@/components/icons/gear-2-1";
import InboxArrowDown1 from "@/components/icons/inbox-arrow-down-1";
import House21 from "@/components/icons/house-2-1";

import BeansLogo from "@assets/logo/icon.svg";
import { NOTE_ROUTE } from "@/utils/constants/routes";
import Link from "next/link";
import AuthUserButton from "./client/auth-user-button";
import SidebarLinkDropdown from "./client/siderbar-link-dropdown";
import UserAvatar from "../user/user_avatar";

export default async function Sidebar() {
  const { data: notes } = await getNotes();

  const { notes: shared_notes, error: shared_notes_error } =
    await getSharedNotes();

  console.log("Shared notes: ", shared_notes, shared_notes_error);

  return (
    <div
      className={
        "flex flex-col sticky top-0 left-0 h-dvh max-h-dvh min-w-64 w-64 bg-background"
      }
    >
      <div className={"flex flex-col flex-grow-0 flex-shrink-0 bg-background"}>
        <div
          className={
            "flex items-center justify-start gap-2 pt-6 px-6 select-none"
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
        <NewNoteButton shine={!notes?.length} />
      </SidebarGroup>

      <div className={"flex flex-col gap-2 relative flex-1 overflow-y-auto"}>
        {!!shared_notes?.length && (
          <SidebarGroup title={"Shared"}>
            {shared_notes
              ?.filter((shared) => shared.note)
              .map((shared, i) => (
                <SidebarLink
                  symbol={shared.note?.emoji ?? undefined}
                  key={shared.note?.id}
                  href={`${NOTE_ROUTE}/${shared.note?.id}`}
                  trailing={<SidebarLinkDropdown note={shared.note!} />}
                >
                  {shared.note?.title}
                  {shared.sharedBy && (
                    <div className="text-xs flex items-center gap-0.5 mt-1">
                      <UserAvatar
                        className="w-4 h-4"
                        src={shared.sharedBy.avatar ?? ""}
                        fallback={{
                          display: shared.sharedBy.full_name?.[0] ?? "",
                          className: "text-[9px]",
                        }}
                      />
                      <span className="text-muted-foreground font-medium">
                        {shared.sharedBy.full_name ?? shared.sharedBy.handle}
                      </span>
                    </div>
                  )}
                </SidebarLink>
              ))}
          </SidebarGroup>
        )}

        <SidebarGroup title={"Recent"}>
          {!notes?.length && (
            <div className={"flex items-start gap-2 pt-2 px-1"}>
              <span className={"text-accent"}>
                <Scribble1 width={"1.3em"} height={"1.3em"} strokewidth={1.6} />
              </span>
              <div className={"text-xs"}>
                <p className={"font-medium"}>No notes</p>
                <p className={"text-muted-foreground pr-0.5"}>
                  Create a note by clicking the button above.
                </p>
              </div>
            </div>
          )}
          {notes?.map((note) => (
            <SidebarLink
              symbol={note.emoji ?? undefined}
              key={note.id}
              href={`${NOTE_ROUTE}/${note.id}`}
              trailing={<SidebarLinkDropdown note={note} />}
            >
              {note.title}
            </SidebarLink>
          ))}
        </SidebarGroup>
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
