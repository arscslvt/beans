"use server";

import { getNotes } from "@/utils/notes/get";
import React from "react";
import SidebarGroup, { SidebarGroupProps } from "../sidebar-group";
import Scribble1 from "@/components/icons/scribble-1";
import SidebarLink from "../sidebar-link";
import { NOTE_ROUTE } from "@/utils/constants/routes";
import SidebarLinkDropdown from "../client/siderbar-link-dropdown";

interface SidebarNotesProps extends SidebarGroupProps {}

export default async function SidebarNotes({ ...props }: SidebarNotesProps) {
  const { data: notes } = await getNotes();

  return (
    <SidebarGroup title={"Recent"} {...props}>
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
  );
}
