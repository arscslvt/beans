"use client";

import React from "react";
import SidebarGroup, { SidebarGroupProps } from "../sidebar-group";
import SidebarLink from "../sidebar-link";
import { NOTE_ROUTE } from "@/utils/constants/routes";
import SidebarLinkDropdown from "../client/siderbar-link-dropdown";
import { useNote } from "@/hooks/useNote";

interface SidebarSharedNotesProps extends SidebarGroupProps {}

export default function SidebarSharedNotes({
  ...props
}: SidebarSharedNotesProps) {
  const { sharedNotes } = useNote();

  if (!sharedNotes?.list.length) {
    return <></>;
  }

  return (
    <SidebarGroup title={"Shared"} {...props}>
      {sharedNotes.list
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
              <div className="text-xs flex items-center gap-1 mt-1">
                <span className="text-muted-foreground font-medium group-data-[active=true]/sidebar-link:text-accent-foreground/60 leading-[10px] pt-[0.7px]">
                  from {shared.sharedBy.full_name ?? shared.sharedBy.handle}
                </span>
              </div>
            )}
          </SidebarLink>
        ))}
    </SidebarGroup>
  );
}
