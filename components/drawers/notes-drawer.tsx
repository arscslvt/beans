import React from "react";
import { DrawerContent } from "@/components/ui/drawer";
import { SidebarGroup } from "@/components/sidebar/sidebar";
import { getNotes, getSharedNotes } from "@/utils/notes/get";
import Scribble1 from "@/components/icons/scribble-1";
import SidebarLink from "@/components/sidebar/sidebar-link";
import { NOTE_ROUTE } from "@/utils/constants/routes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisIcon } from "lucide-react";
import NoteDropdown from "@/components/dropdowns/note-dropdown";
import NewNoteButton from "@/components/sidebar/client/new-note-button";
import SidebarNotes from "../sidebar/partial/sidebar-notes";
import SidebarSharedNotes from "../sidebar/partial/sidebar-shared-notes";

interface NotesDrawerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

export default async function NotesDrawer({}: NotesDrawerProps) {
  return (
    <DrawerContent className="pb-3">
      <SidebarGroup>
        <NewNoteButton />
      </SidebarGroup>

      <SidebarSharedNotes className="py-0" />
      <SidebarNotes className="py-0" />
    </DrawerContent>
  );
}
