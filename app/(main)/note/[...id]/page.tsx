import React from "react";
import { getNoteById } from "@/utils/notes/get";
import Viewer from "@/components/viewer/viewer";

export default async function NotePage({
  params: { id },
}: {
  params: {
    id: number;
  };
}) {
  const { note, sources, errors } = await getNoteById(id);

  return (
    <div className="flex-1 flex flex-col">
      {note && <Viewer source={sources ? sources[0] : undefined} />}
    </div>
  );
}
