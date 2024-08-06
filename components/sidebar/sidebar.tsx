import React from 'react'
import Image from "next/image";

import {currentUser} from "@clerk/nextjs/server";
import {getNotes, getSharedNotes} from "@/utils/notes/get";

import SidebarLink from "@/components/sidebar/sidebar-link";
import SidebarGroup from "@/components/sidebar/sidebar-group";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

import NoteDropdown from "@/components/dropdowns/note-dropdown";

import Scribble1 from "@/components/icons/scribble-1";
import Magnifier3 from "@/components/icons/magnifier-3";
import {EllipsisIcon} from "lucide-react";
import Gear21 from "@/components/icons/gear-2-1";
import InboxArrowDown1 from "@/components/icons/inbox-arrow-down-1";
import House21 from "@/components/icons/house-2-1";

import BeansLogo from "@assets/logo/icon.svg";
import {NOTE_ROUTE} from "@/utils/constants/routes";
import Link from "next/link";

export default async function Sidebar() {
    const user = await currentUser();
    const {data: notes, error} = await getNotes();
    const {notes: shared_notes, error: shared_notes_error} = await getSharedNotes();

    // console.log("My own Notes: ", notes, error);
    // console.log("Shared Notes: ", shared_notes, shared_notes_error);

    return (
        <div className={"flex flex-col sticky top-0 left-0 h-dvh max-h-dvh border-r border-border min-w-64 w-64"}>
            <div className={"flex flex-col flex-grow-0 flex-shrink-0 bg-background"}>
                <div className={"flex items-center justify-start gap-2 pt-6 px-6 select-none"}>
                    <Link href={"/"} className={"hover:scale-105 active:scale-95 transition-transform"}>
                        <Image src={BeansLogo} alt={"Beans Logo"} width={28} height={28} className={"pointer-events-none"}/>
                    </Link>
                </div>
                <SidebarGroup>
                    <SidebarLink symbol={<Magnifier3/>} role={"button"} preview>Search</SidebarLink>
                    <SidebarLink symbol={<House21/>} href={"/"}>Home</SidebarLink>
                    <SidebarLink symbol={<InboxArrowDown1/>} preview>Inbox</SidebarLink>
                    <SidebarLink symbol={<Gear21/>} preview>Settings</SidebarLink>
                </SidebarGroup>
            </div>

            <SidebarGroup className={"!py-0"}>
                <NewNoteButton shine={!notes?.length}/>
            </SidebarGroup>

            <div className={"flex flex-col gap-2 relative flex-1 overflow-y-auto"}>
                {!!shared_notes?.length && <SidebarGroup title={"Shared"}>
                    {shared_notes?.map((note) => (
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
                </SidebarGroup>}

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