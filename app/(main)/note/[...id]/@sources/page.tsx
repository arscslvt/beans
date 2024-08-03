import React from 'react';
import {SidebarGroup, SidebarLink} from "@/components/sidebar/sidebar";
import {getSourcesByNote} from "@/utils/sources/get";
import {format} from "date-fns";
import {NOTE_ROUTE} from "@/utils/constants/routes";
import Feather2 from "@/components/icons/feather-2";

export default async function Sources(
    {
        params: {id}
    }: {
        params: { id: number }
    }) {

    const {sources} = await getSourcesByNote(id)

    return (
        <div className={"border-l min-h-dvh h-dvh sticky top-0 right-0 min-w-52 max-w-52 overflow-y-auto"}>
            <SidebarGroup title={"Note versions"}>
                {!sources?.length &&
                    <div className={"flex items-start gap-2 pt-2 px-1"}>
                        <span className={"text-accent"}><Feather2 width={"1.3em"} height={"1.3em"} strokewidth={1.6}/></span>
                        <div className={"text-xs"}>
                            <p className={"font-medium"}>
                                All clean
                            </p>
                            <p className={"text-muted-foreground pr-0.5"}>
                                No versions of this note yet. Create one by editing the note.
                            </p>
                        </div>
                    </div>
                }
                {
                    sources?.map((source, i) => (
                        <SidebarLink key={source.id}
                                     href={i ? `${NOTE_ROUTE}/${source.note_id}/${source.id}` : `${NOTE_ROUTE}/${source.note_id}`}>
                            {format(source.created_at, "iii d, LLL")}
                        </SidebarLink>
                    ))
                }
            </SidebarGroup>
        </div>
    );
}