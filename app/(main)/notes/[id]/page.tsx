import React from 'react';
import {getNoteById} from "@/utils/notes/get";
import Viewer from "@/components/viewer/viewer";
import ViewerHeader from "@/components/viewer/viewer-header";
import {DatabaseSource} from "@/types/source.types";

export default async function NotePage(
    {
        params: {
            id
        }
    }: {
        params: {
            id: number
        }
    }
) {
    const {note, sources, errors} = await getNoteById(id)

    console.log("Retrieved Note: ", note, sources, errors)

    const handleEdit = (sources: DatabaseSource) => {}

    return (
        <div>
            {note && <Viewer note={note} source={sources ? sources[0] : undefined}/>}
        </div>
    );
}