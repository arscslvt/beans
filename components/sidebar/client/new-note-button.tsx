"use client";

import React from 'react';
import SidebarLink from "@/components/sidebar/sidebar-link";
import Plus1 from "@/components/icons/plus-1";
import {toast} from "sonner";
import {useAuth} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {createNote} from "@/utils/notes/save";

const NewNoteButton = () => {
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
        <SidebarLink symbol={<Plus1 />} onClick={handleNewNote}>
            <span className={"text-muted-foreground"}>New note</span>
        </SidebarLink>
    );
};

export default NewNoteButton;