"use client";

import React, {useEffect} from 'react';
import {formatDistanceToNow} from "date-fns";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";
import {DatabaseNote} from "@/types/note.types";

import loadash from "lodash";
import {saveNote} from "@/utils/notes/save";

interface ViewerHeaderProps {
    title: string;
    description?: string;
    note: DatabaseNote;

    lastEdited?: Date;
    lastEditedBy?: string;

}

const ViewerHeader = ({note, title, description, lastEdited}: ViewerHeaderProps) => {

    const [_title, setTitle] = React.useState(title);

    const updateNote = async () => {
        const {data, error} = await saveNote(note.id, {
            title: _title,
        })

        if (error) {
            console.error("Error saving note: ", error);
            return toast.error("Error saving note.");
        }

        console.log("Updated note: ", data);
    }


    useEffect(() => {
        const update = loadash.debounce(updateNote, 1000)

        const interval = setTimeout(() => {
            update();
        } , 1500);

        return () => clearTimeout(interval);
    }, [_title]);

    return (
        <div className={"flex px-16 py-6"}>
        <div className={"flex-1"}>
            <div>
                <Textarea
                    placeholder={"New Note"}
                    className={"p-0 m-0 border-0 text-2xl font-bold resize-none shadow-none focus-visible:ring-0 rounded-none"}
                    value={_title}
                    onInput={(e) => {
                        setTitle(e.currentTarget.value);
                    }}
                    onKeyDown={(e) => {
                       // deny enter key
                        if (e.key === "Enter") {
                            console.log("Ciao")
                            e.preventDefault();
                        }
                    }}
                    autoSize
                    defaultHeight={36}
                    maxRows={2}
                />
                {description && <p className={"text-gray-500"}>description</p>}
            </div>

            <div>
                {lastEdited ? <p className={"text-xs text-muted-foreground"}>Last edited by <span className={"font-semibold"}>you</span>
                    {lastEdited ? ` — ${formatDistanceToNow(new Date(lastEdited), {addSuffix: true})}` : ""}
                </p> : <p className={"text-xs text-muted-foreground"}>Not saved yet</p>}
            </div>
        </div>
        </div>
    );
};

export default ViewerHeader;