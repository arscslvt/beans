"use client";

import React, {useEffect} from 'react';
import {formatDistanceToNow} from "date-fns";
import {Textarea} from "@/components/ui/textarea";
import {createClient} from "@/utils/supabase/client";
import {useAuth} from "@clerk/nextjs";
import {toast} from "sonner";
import {DatabaseNote} from "@/types/note.types";

import loadash from "lodash";

interface ViewerHeaderProps {
    title: string;
    description?: string;
    note: DatabaseNote;

    lastEdited?: Date;
    lastEditedBy?: string;

}

const ViewerHeader = ({note, title, description, lastEdited}: ViewerHeaderProps) => {

    const [isSaving, setIsSaving] = React.useState(false);
    const [_title, setTitle] = React.useState(title);

    const {getToken} = useAuth();

    const updateNote = async () => {
        const token = await getToken({
            template: "supabase"
        })

        if (!token) {
            console.error("No token found. Not saving.");
            toast.error("You need to be logged in to update your note.");
            return;
        }

        const supabase = createClient(token);

        setIsSaving(true);

        const {data, error} = await supabase.from("notes").update({
            title: _title
        }).eq("id", note.id);

        console.log("Updated note data: ", data, error);

        setIsSaving(false);
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
                {lastEdited ? <p className={"text-xs text-muted-foreground"}>Last edited by <span className={"font-semibold"}>John Doe</span>
                    {lastEdited ? ` — ${formatDistanceToNow(new Date(lastEdited), {addSuffix: true})}` : ""}
                </p> : <p className={"text-xs text-muted-foreground"}>Not saved yet</p>}
            </div>
        </div>
        </div>
    );
};

export default ViewerHeader;