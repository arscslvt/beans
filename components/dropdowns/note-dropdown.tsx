"use client";

import React from 'react';
import {DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {DatabaseNote} from "@/types/note.types";
import {deleteNote} from "@/utils/notes/delete";
import {toast} from "sonner";
import {useRouter} from "next/navigation";


const NoteDropdown = ({id} : DatabaseNote) => {
    const router = useRouter();

    const handleDeleteNote = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const {error} = await deleteNote(id);

        if (error) {
            return toast.error("Failed to delete note. Please try again later.");
        }

        toast.success("Note deleted successfully.");
    }

    return (
        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push(`notes/${id}`)}>
                Edit
            </DropdownMenuItem>
            <DropdownMenuItem
                className={"text-destructive hover:!bg-destructive hover:text-destructive-foreground"}
                onClick={handleDeleteNote}
            >
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    );
};

export default NoteDropdown;