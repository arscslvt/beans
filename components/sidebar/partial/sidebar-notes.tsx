"use client";

import React from "react";
import SidebarGroup, {
  SidebarGroupProps,
  SidebarLoadingFallback,
} from "../sidebar-group";
import Scribble1 from "@/components/icons/scribble-1";
import SidebarLink from "../sidebar-link";
import SidebarLinkDropdown from "../client/siderbar-link-dropdown";
import { useNote } from "@/hooks/useNote";
import { NOTE_ROUTE } from "@/utils/constants/routes";

interface SidebarNotesProps extends SidebarGroupProps {}

export default function SidebarNotes({ ...props }: SidebarNotesProps) {
  const { notes } = useNote();

  if (notes.loading) {
    return <SidebarLoadingFallback />;
  }

  return (
    <SidebarGroup title={"Recent"} {...props}>
      {!notes?.list.length && (
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
      {notes?.list.map((note) => (
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
