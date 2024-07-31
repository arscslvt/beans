import React from 'react'

import {currentUser} from "@clerk/nextjs/server";

import SidebarLink from "@/components/sidebar/sidebar-link";
import SidebarGroup from "@/components/sidebar/sidebar-group";
import House21 from "@/components/icons/house-2-1";
import InboxArrowDown1 from "@/components/icons/inbox-arrow-down-1";
import Gear21 from "@/components/icons/gear-2-1";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import {getNotes} from "@/utils/notes/get";
import Plus1 from "@/components/icons/plus-1";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

export default async function Sidebar() {
    const user = await currentUser();
    const {data: notes, error} = await getNotes();

    // console.log("Notes: ", notes)
    // console.log("Errors: ", error)

    return (
        <div className={"flex flex-col h-dvh border-r border-border min-w-64"}>
            <div className={"py-6 px-3 select-none"}>
                <h1 className={"text-xl font-semibold"}><span className={"text-accent"}>3</span> notes</h1>
            </div>
            <div className={"flex flex-col"}>
                <SidebarGroup>
                    <SidebarLink symbol={<House21/>} href={"/"}>Home</SidebarLink>
                    <SidebarLink symbol={<InboxArrowDown1/>}>Inbox</SidebarLink>
                    <SidebarLink symbol={<Gear21/>}>Settings</SidebarLink>
                </SidebarGroup>

                <SidebarGroup title={"Recent"}>
                    {notes?.map((note) => (
                        <SidebarLink symbol={note.emoji ?? undefined} key={note.id} href={`/notes/${note.id}`}>
                            {note.title}
                        </SidebarLink>
                    ))}
                </SidebarGroup>

                <NewNoteButton/>
            </div>

            <div className={"flex-1 flex flex-col justify-end pb-3"}>
                <SidebarLink>
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
            </div>
        </div>
    )
}

export {SidebarLink, SidebarGroup}