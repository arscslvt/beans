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
// @ts-ignore
import Marker from '@editorjs/marker';
// @ts-ignore
import Underline from '@editorjs/underline';
import {EditorCore} from "@react-editor-js/core";
// @ts-ignore
import Quote from '@editorjs/quote';
// @ts-ignore
import Warning from '@editorjs/warning';

import {createReactEditorJS} from 'react-editor-js'
import {createSource, saveSource} from "@/utils/notes/save";

interface ViewerProps {
    note: DatabaseNote;
    source?: DatabaseSource;
}

function Viewer({note, source}: ViewerProps) {
    const ReactEditorJS = createReactEditorJS();

    const editorCore = React.useRef<EditorCore | null>(null)

    const handleInitialize = React.useCallback((
        instance: EditorCore
    ) => {
        editorCore.current = instance
    }, [editorCore.current])

    const handleReady = React.useCallback(() => {
        if (!editorCore.current) return;
        const editor = editorCore.current;

    }, [editorCore.current])

    const handleSaving = async () => {
        if (!editorCore.current) return;

        const savedData = await editorCore.current.save();

        const {data, error} = source ? await saveSource(source.id, {
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
        <div>
            <ViewerHeader
                title={note?.title || ""} description={note?.description ?? undefined}
                lastEdited={source?.last_edited_at ? new Date(source.last_edited_at) : undefined}
                note={note}
            />

            <div className={"px-2 viewer-editor"}>
                <ReactEditorJS
                    onInitialize={handleInitialize}
                    // onReady={handleReady}
                    onChange={handleSaving}
                    defaultValue={source?.content}
                    tools={{
                        header: Header,
                        list: NestedList,
                        table: Table,
                        quote: Quote,
                        Marker: {
                            class: Marker,
                            shortcut: 'CMD+SHIFT+M',
                        }
                    }}
                    placeholder={"Start writing your note..."}
                    holder={"editorjs"}
                />
            </div>
        </div>
    );
}

export default Viewer;