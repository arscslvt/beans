import React from 'react'

import {currentUser} from "@clerk/nextjs/server";

import SidebarLink from "@/components/sidebar/sidebar-link";
import SidebarGroup from "@/components/sidebar/sidebar-group";
import House21 from "@/components/icons/house-2-1";
import InboxArrowDown1 from "@/components/icons/inbox-arrow-down-1";
import Gear21 from "@/components/icons/gear-2-1";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import {getNotes} from "@/utils/notes/get";
import NewNoteButton from "@/components/sidebar/client/new-note-button";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {EllipsisIcon} from "lucide-react";
import NoteDropdown from "@/components/dropdowns/note-dropdown";
import {Button} from "@/components/ui/button";
import Scribble1 from "@/components/icons/scribble-1";

export default async function Sidebar() {
    const user = await currentUser();
    const {data: notes, error} = await getNotes();


    return (
        <div className={"flex flex-col sticky top-0 left-0 h-dvh max-h-dvh border-r border-border min-w-64 w-64"}>
            <div className={"flex flex-col flex-grow-0 flex-shrink-0 bg-background"}>
                <div className={"pt-6 px-3 select-none"}>
                    <h1 className={"text-xl font-semibold"}>
                        Beans
                    </h1>
                </div>
                <SidebarGroup>
                    <SidebarLink symbol={<House21/>} href={"/"}>Home</SidebarLink>
                    <SidebarLink symbol={<InboxArrowDown1/>} preview>Inbox</SidebarLink>
                    <SidebarLink symbol={<Gear21/>} preview>Settings</SidebarLink>
                </SidebarGroup>
            </div>

            <SidebarGroup>
                <NewNoteButton shine={!notes?.length}/>
            </SidebarGroup>

            <div className={"flex flex-col gap-2 relative flex-1 overflow-y-auto"}>
                <SidebarGroup title={"Recent"}>
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
                            href={`/notes/${note.id}`}
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

            </div>
            <div className={"flex-1 flex flex-col flex-grow-0 flex-shrink-0 justify-end bg-background"}>
                <SidebarGroup>
                    <SidebarLink preview>
                        <div className={"flex items-center gap-2 justify-start text-left"}>
                            <Avatar className={"w-8 h-8"}>
                                <AvatarImage src={user?.imageUrl || ""}
                                             alt={`${user?.firstName ?? "User"} profile picture`}/>
                                <AvatarFallback>
                                    {user?.firstName?.charAt(0).toUpperCase() ?? "U"}
                                </AvatarFallback>
                            </Avatar>

                            <div>
                                <h4 className={"font-medium"}>
                                    {user?.firstName}
                                </h4>
                                <p className={"text-xs text-muted-foreground pt-0.5"}>
                                    Edit your profile
                                </p>
                            </div>
                        </div>
                    </SidebarLink>
                </SidebarGroup>
            </div>
        </div>
    )
}

export {SidebarLink, SidebarGroup}