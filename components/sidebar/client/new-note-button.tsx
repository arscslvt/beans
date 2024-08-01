"use client";

import React from 'react';
import SidebarLink from "@/components/sidebar/sidebar-link";
import Plus1 from "@/components/icons/plus-1";
import {toast} from "sonner";
import {useAuth} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {createNote} from "@/utils/notes/save";
import {cx} from "class-variance-authority";

const NewNoteButton = ({shine} : {shine?: boolean}) => {
    const {getToken} = useAuth();

    const router = useRouter();

    const handleNewNote = async () => {
        const {data: note, error} = await createNote({
            title: "New Note",
        })

        if (error) {
            console.error("Error creating note: ", error);
            return toast.error("Error creating note.");
        }

        if(!note) return toast.error("Error creating note.");

        toast.success("New note created.");
        return router.push(`/notes/${note.id}`);
    }

    return (
        <SidebarLink symbol={<Plus1 fill={shine ? "hsl(var(--accent))" : undefined} />} onClick={handleNewNote} variant={shine ? "shine" : "default"}>
            {shine &&
                <div className={"absolute z-0 top-0 right-0 w-full h-full flex items-center justify-center"}>
                    <div className={"z-0 h-52 w-[30px] bg-gradient-to-r from-transparent to-accent animate-spin"} style={{
                        animationDuration: "3s",
                    }}/>
                    <div className={"absolute z-10 top-0 left-0 w-full h-full p-[1px]"}>
                        <div className={"relative z-10 w-full h-full bg-background rounded-md overflow-clip"}>
                            <div className={"relative z-10 w-full h-full bg-accent/10 group-hover/sidebar-link:bg-accent/20 transition-colors"} />
                        </div>
                    </div>
                </div>
            }

            <span className={cx(shine ? "text-accent" : "text-muted-foreground", "relative z-10")}>New note</span>
        </SidebarLink>
    );
};

export default NewNoteButton;