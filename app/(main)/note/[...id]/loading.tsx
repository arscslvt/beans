import React from "react";
import Loader2 from "@/components/icons/loader-2";
import { getNoteById } from "@/utils/notes/get";
import { Metadata, ResolvingMetadata } from "next";
import { DatabaseNote } from "@/types/note.types";

type Props = {
  params: { id: DatabaseNote["id"] };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const { note } = await getNoteById(id);

  return {
    title: note?.title || "Unsaved Note",
  };
}

export default function LoadingNote() {
  return (
    <div className={"py-6 px-6"}>
      <div className={"flex gap-1 items-center text-sm"}>
        <span className={"animate-spin"}>
          <Loader2
            width={"1.2em"}
            height={"1.2em"}
            fill={"hsl(var(--accent))"}
          />
        </span>
        <span className={"text-muted-foreground"}>Retrieving note...</span>
      </div>
    </div>
  );
}
