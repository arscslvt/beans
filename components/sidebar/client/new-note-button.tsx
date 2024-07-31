"use client";

import React from 'react';
import SidebarLink from "@/components/sidebar/sidebar-link";
import Plus1 from "@/components/icons/plus-1";
import {toast} from "sonner";
import {createClient} from "@/utils/supabase/client";
import {useAuth} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

const NewNoteButton = () => {
    const {getToken} = useAuth();

    const router = useRouter();

    const handleNewNote = async () => {
        const token = await getToken({
            template: "supabase"
        });

        if (!token) {
            console.error("No token found. Not creating a new note.");
            return toast.error("You need to be logged in to create a new note.");
        }

        const supabase = createClient(token);

        const {data, error} = await supabase.from("notes").insert({}).select("id").single();

        if (error) {
            console.error("Error creating a new note: ", error);
            return toast.error("Error creating a new note.");
        }

        toast.success("New note created.");

        return router.push(`/notes/${data.id}`);
    }

    return (
        <SidebarLink symbol={<Plus1 />} onClick={handleNewNote}>
            <span className={"text-muted-foreground"}>New note</span>
        </SidebarLink>
    );
};

export default NewNoteButton;