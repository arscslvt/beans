"use client";

import React from 'react';
import {DatabaseNote} from "@/types/note.types";
import SidebarGroup from "@/components/sidebar/sidebar-group";
import {Button} from "@/components/ui/button";
import Handshake1 from "@/components/icons/handshake-1";
import Trash1 from "@/components/icons/trash-1";
import {ResponsiveDialog} from "@/components/dialogs/responsive-dialog";
import ShareNoteDialog from "@/components/dialogs/note/share-note-dialog";

interface NoteActionsProps {
    noteId: DatabaseNote["id"];
}

export default function NoteActions({noteId}: NoteActionsProps) {
    return (
        <div>
            <SidebarGroup title="Actions">
                <ResponsiveDialog asChild content={<ShareNoteDialog noteId={noteId} />} title={"Write with me"}>
                    <Button variant={"ghost"} className={"justify-start"}>
                        <Handshake1 width={"18"} height={"18"} strokewidth={1.3} />
                        Write with me
                    </Button>
                </ResponsiveDialog>
                <Button variant={"ghost"} className={"justify-start"}>
                    <Trash1 width={"18"} height={"18"} strokewidth={1.3} />
                    Delete note
                </Button>
            </SidebarGroup>
        </div>
    );
}