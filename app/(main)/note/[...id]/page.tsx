import React from "react";
import { getNoteById } from "@/utils/notes/get";
import Viewer from "@/components/viewer/viewer";
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

export default async function NotePage({
  params: { id },
}: {
  params: {
    id: number;
  };
}) {
  const { note, sources, errors } = await getNoteById(id);

  console.log(
    "Retrieved Note: ",
    note?.id,
    " | Connected sources: ",
    sources?.length,
    errors
  );

  return (
    <div>
      {note && <Viewer note={note} source={sources ? sources[0] : undefined} />}
    </div>
  );
}
