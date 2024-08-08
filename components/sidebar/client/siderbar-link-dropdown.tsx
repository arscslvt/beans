import NoteDropdown from "@/components/dropdowns/note-dropdown";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DatabaseNote } from "@/types/note.types";
import { EllipsisIcon } from "lucide-react";
import React from "react";

export default function SidebarLinkDropdown({ note }: { note: DatabaseNote }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={
          "opacity-0 group-hover/sidebar-link:opacity-100 group-focus/sidebar-link:opacity-100 transition-opacity"
        }
      >
        <Button
          variant={"outline"}
          size={"icon"}
          className={
            "rounded-full shadow-none min-w-5 w-5 h-5 bg-background text-foreground hover:border-accent"
          }
        >
          <EllipsisIcon className={"w-3 h-3"} />
        </Button>
      </DropdownMenuTrigger>
      <NoteDropdown {...note} />
    </DropdownMenu>
  );
}
