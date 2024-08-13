import React from "react";
import SidebarLink from "../sidebar-link";
import SidebarGroup from "../sidebar-group";
import { getSharedWith } from "@/utils/notes/get";
import { DatabaseNote } from "@/types/note.types";
import UserAvatar from "@/components/user/user_avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import SharedUserDropdown from "@/components/dropdowns/shared-user-dropdown";

export default async function SharedWith({
  noteId,
}: {
  noteId: DatabaseNote["id"];
}) {
  const { profiles } = await getSharedWith(noteId);

  if (!profiles || !profiles.length) return <></>;

  return (
    <SidebarGroup title="Shared with">
      {profiles.map((profile, key) => (
        <DropdownMenu key={key}>
          <SidebarLink
            symbol={
              <UserAvatar
                className="w-4 h-4"
                src={profile.avatar ?? ""}
                fallback={{ display: profile?.full_name?.[0] ?? "" }}
              />
            }
            trailing={
              <DropdownMenuTrigger>
                <Ellipsis size={16} />
              </DropdownMenuTrigger>
            }
          >
            {profile.full_name}
          </SidebarLink>

          <SharedUserDropdown userId={profile.user_id} noteId={noteId} />
        </DropdownMenu>
      ))}
    </SidebarGroup>
  );
}
