"use client";

import {DatabaseSource} from "@/types/source.types";
import React from "react";
import Header from "@editorjs/header";
import ViewerHeader from "@/components/viewer/viewer-header";
import {DatabaseNote} from "@/types/note.types";
import {useAuth} from "@clerk/nextjs";
import {toast} from "sonner";
import NestedList from "@editorjs/nested-list";
// @ts-ignore
import Table from '@editorjs/table';

import { createReactEditorJS } from 'react-editor-js'
import {EditorCore} from "@react-editor-js/core";
import {createSource, saveSource} from "@/utils/notes/save";

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

        const {data, error} = source ?  await saveSource(source.id, {
            content: savedData,
        }) : await createSource({
            content: savedData,
            note_id: note.id,
        });

        if (error) {
            console.error("Error saving source: ", error);
            return toast.error("Error saving source.");
        }

        console.log("Saved note source: ", data);
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