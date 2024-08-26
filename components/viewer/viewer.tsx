"use client";

import { DatabaseSource } from "@/types/source.types";
import React from "react";
import ViewerHeader from "@/components/viewer/viewer-header";
import { DatabaseNote } from "@/types/note.types";
import { cx } from "class-variance-authority";
import TemplatesList from "./template/template-list";
import Editor from "../editor/editor";
import { JSONContent } from "@tiptap/react";
import loadash from "lodash";
import { useNote } from "@/hooks/useNote";

interface ViewerProps {
  note: DatabaseNote;
  source?: DatabaseSource;
}

function Viewer({ note, source }: ViewerProps) {
  const [content, setContent] = React.useState<JSONContent>(
    source?.content as JSONContent
  );

  const { saveNote, isSaving } = useNote();

  const handleSaving = async (content: JSONContent) => {
    const data = await saveNote(content);

    console.log("Saved note source: ", data);
  };

  React.useEffect(() => {
    if (source?.content) {
      setContent(source.content as JSONContent);
    }
  }, [source]);

  React.useEffect(() => {
    console.log("Content: ", content);
    console.log("Source: ", source?.content);

    if (!content || !source?.content) return;
    if (JSON.stringify(content) === JSON.stringify(source.content)) {
      console.log("Content is the SAME as source content.");
      return;
    }

    console.log("Content is DIFFERENT from source content.");

    const update = loadash.debounce(handleSaving, 1000);

    const interval = setTimeout(() => {
      update(content);
    }, 800);

    return () => clearTimeout(interval);
  }, [content]);

  return (
    <div className="relative z-30">
      <ViewerHeader
        title={note?.title || ""}
        description={note?.description ?? undefined}
        lastEdited={
          source?.last_edited_at ? new Date(source.last_edited_at) : undefined
        }
        note={note}
        isSaving={isSaving}
      />

      <div className={cx("px-4 md:px-12 viewer-editor")}>
        <Editor
          leading={
            !source && (
              <div className="pt-3 pb-3 px-4">
                <TemplatesList />
              </div>
            )
          }
          defaultContent={content as unknown as string}
          onChange={(content) => setContent(content)}
        />
      </div>
    </div>
  );
}

export default Viewer;
