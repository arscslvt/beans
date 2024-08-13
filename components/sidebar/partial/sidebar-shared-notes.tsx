"use server";
import React from "react";
import SidebarGroup, { SidebarGroupProps } from "../sidebar-group";
import { getSharedNotes } from "@/utils/notes/get";
import SidebarLink from "../sidebar-link";
import { NOTE_ROUTE } from "@/utils/constants/routes";
import SidebarLinkDropdown from "../client/siderbar-link-dropdown";
import UserAvatar from "@/components/user/user_avatar";

interface SidebarSharedNotesProps extends SidebarGroupProps {}

export default async function SidebarSharedNotes({
  ...props
}: SidebarSharedNotesProps) {
  const { notes: shared_notes, error: shared_notes_error } =
    await getSharedNotes();

  console.log("Shared notes: ", shared_notes);

  if (!shared_notes || !shared_notes?.length) {
    return <></>;
  }

  return (
    <SidebarGroup title={"Shared"} {...props}>
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
              <div className="text-xs flex items-center gap-1 mt-1">
                <UserAvatar
                  className="w-4 h-4"
                  src={shared.sharedBy.avatar ?? ""}
                  fallback={{
                    display: shared.sharedBy.full_name?.[0] ?? "",
                    className:
                      "text-[9px] group-data-[active=true]/sidebar-link:bg-accent-foreground/20 group-data-[active=true]/sidebar-link:text-accent-foreground group-data-[active=true]/sidebar-link:border-accent-foreground/50",
                  }}
                />
                <span className="text-muted-foreground font-medium group-data-[active=true]/sidebar-link:text-accent-foreground/60 leading-[10px] pt-[0.7px]">
                  {shared.sharedBy.full_name ?? shared.sharedBy.handle}
                </span>
              </div>
            )}
          </SidebarLink>
        ))}
    </SidebarGroup>
  );
}
