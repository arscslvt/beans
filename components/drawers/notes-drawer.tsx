import React from 'react';
import {DrawerContent} from "@/components/ui/drawer";
import {SidebarGroup} from "@/components/sidebar/sidebar";
import {getNotes} from "@/utils/notes/get";
import Scribble1 from "@/components/icons/scribble-1";
import SidebarLink from "@/components/sidebar/sidebar-link";
import {NOTE_ROUTE} from "@/utils/constants/routes";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {EllipsisIcon} from "lucide-react";
import NoteDropdown from "@/components/dropdowns/note-dropdown";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

interface NotesDrawerProps {
    children?: React.ReactNode;
    asChild?: boolean;
}

export default async function NotesDrawer({}:NotesDrawerProps) {
    const {data: notes, error} = await getNotes();

    return (
        <DrawerContent>
            <NewNoteButton />

            <SidebarGroup title="Recents">
                {!notes?.length &&
                    <div className={"flex items-start gap-2 pt-2 px-1"}>
                        <span className={"text-accent"}><Scribble1 width={"1.3em"} height={"1.3em"} strokewidth={1.6} /></span>
                        <div className={"text-xs"}>
                            <p className={"font-medium"}>
                                No notes
                            </p>
                            <p className={"text-muted-foreground pr-0.5"}>
                                Create a note by clicking the button above.
                            </p>
                        </div>
                    </div>
                }
                {notes?.map((note) => (
                    <SidebarLink
                        symbol={note.emoji ?? undefined}
                        key={note.id}
                        href={`${NOTE_ROUTE}/${note.id}`}
                        trailing={
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild
                                                     className={"opacity-0 group-hover/sidebar-link:opacity-100 group-focus/sidebar-link:opacity-100"}>
                                    <Button variant={"outline"} size={"icon"}
                                            className={"w-5 h-5 bg-background text-foreground group-data-[active=true]/sidebar-link:hover:bg-background group-data-[active=true]/sidebar-link:hover:text-foreground"}>
                                        <EllipsisIcon className={"w-3 h-3"}/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <NoteDropdown {...note} />
                            </DropdownMenu>
                        }

                    >
                        {note.title}
                    </SidebarLink>
                ))}
            </SidebarGroup>
        </DrawerContent>
    );
}