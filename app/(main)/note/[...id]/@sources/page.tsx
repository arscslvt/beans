import React from "react";
import { SidebarGroup, SidebarLink } from "@/components/sidebar/sidebar";
import { getSourcesByNote } from "@/utils/sources/get";
import * as date from "date-fns";
import { NOTE_ROUTE } from "@/utils/constants/routes";
import Feather2 from "@/components/icons/feather-2";
import NoteActions from "@/components/sidebar/client/note-actions";
import { getNoteById } from "@/utils/notes/get";

export default async function Sources({
  params: { id },
}: {
  params: { id: number };
}) {
  const { sources } = await getSourcesByNote(id);
  const { note } = await getNoteById(id);

  return (
    <div
      className={
        "hidden lg:block border-l min-h-dvh h-dvh sticky top-0 right-0 min-w-52 max-w-52 overflow-y-auto shadow-lg"
      }
    >
      {note && <NoteActions note={note} />}
      <SidebarGroup title={"Note versions"}>
        {!sources?.length && (
          <div className={"flex items-start gap-2 pt-2 px-1"}>
            <span className={"text-accent"}>
              <Feather2 width={"1.3em"} height={"1.3em"} strokewidth={1.6} />
            </span>
            <div className={"text-xs"}>
              <p className={"font-medium"}>All clean</p>
              <p className={"text-muted-foreground pr-0.5"}>
                No versions of this note yet. Create one by editing the note.
              </p>
            </div>
          </div>
        )}
        {sources?.map((source, i) => (
          <SidebarLink
            disabled={!!i}
            preview={!!i}
            key={source.id}
            href={
              i
                ? `${NOTE_ROUTE}/${source.note_id}/${source.id}`
                : `${NOTE_ROUTE}/${source.note_id}`
            }
          >
            {date.isToday(source.last_edited_at)
              ? date.isThisMinute(source.last_edited_at)
                ? "now"
                : date.formatDistanceToNow(source.last_edited_at, {
                    addSuffix: true,
                  })
              : date.format(source.created_at, "iii d, LLL")}
          </SidebarLink>
        ))}
      </SidebarGroup>
    </div>
  );
}
