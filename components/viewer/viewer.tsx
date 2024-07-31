"use client";

import {DatabaseSource} from "@/types/source.types";
import React, {useEffect, useRef} from "react";
import Header from "@editorjs/header";
import ViewerHeader from "@/components/viewer/viewer-header";
import {DatabaseNote} from "@/types/note.types";
import {createClient} from "@/utils/supabase/client";
import {useAuth} from "@clerk/nextjs";
import {toast} from "sonner";
import NestedList from "@editorjs/nested-list";
// @ts-ignore
import Table from '@editorjs/table';

import { createReactEditorJS } from 'react-editor-js'
import {EditorCore} from "@react-editor-js/core";

interface ViewerProps {
    note: DatabaseNote;
    source?: DatabaseSource;
}

function Viewer({note, source}: ViewerProps) {
    const { getToken } = useAuth();

    const ReactEditorJS = createReactEditorJS();

    const editorCore = React.useRef<EditorCore | null>(null)

    const handleInitialize = React.useCallback((
        instance: EditorCore
    ) => {
        editorCore.current = instance
    }, [editorCore.current])

    const handleSaving = async () => {
        if (!editorCore.current) return;

        const savedData = await editorCore.current.save();

        try {
            console.log("Editor data: ", savedData);

            const token = await getToken({
                template: "supabase"
            })

            if (!token) {
                console.error("No token found. Not saving.");
                return toast.error("You need to be logged in to save your notes.");
            }

            const supabase = createClient(token, true);

            if (!source) {
                const {data, error} = await supabase.from("sources").insert({
                    content: savedData as unknown as string,
                    note_id: note.id
                }).select().single();

                console.log("Saved data: ", data, error);

                return;
            }

            const {data, error} = await supabase.from("sources").update({
                content: savedData as unknown as string
            }).eq("id", source.id);

            console.log("Saved data: ", data, error);
        } catch (e) {
            console.error("Error saving note: ", e);
            toast.error("Oops! An error occurred while saving your note.");
        }

        return;
    }

    return (
        <>
        <ViewerHeader
            title={note?.title || ""} description={note?.description ?? undefined}
            lastEdited={source?.last_edited_at ? new Date(source.last_edited_at) : undefined}
            note={note}
        />

        <div className={"px-2 viewer-editor"}>
            <ReactEditorJS
                onInitialize={handleInitialize}
                onChange={handleSaving}
                defaultValue={source?.content}
                tools={{
                    header: Header,
                    list: NestedList,
                    table: Table
                }}
                placeholder={"Start writing your note..."}
                holder={"editorjs"}
            />
        </div>
        </>
    );
}

export default Viewer;