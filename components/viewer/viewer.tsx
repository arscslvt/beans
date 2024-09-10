"use client";

import { DatabaseSource } from "@/types/source.types";
import React from "react";
import ViewerHeader from "@/components/viewer/viewer-header";
import { cx } from "class-variance-authority";
import TemplatesList from "./template/template-list";
import { JSONContent } from "@tiptap/react";
import loadash from "lodash";
import { useNote } from "@/hooks/useNote";
import Loader from "@/components/loader/loader";
import EditorProvider from "@/context/editor-context";

interface ViewerProps {
  source?: DatabaseSource;
}

function Viewer({ source }: ViewerProps) {
  const [content, setContent] = React.useState<JSONContent>(
    source?.content as JSONContent
  );

  const { note, saveNote, isSaving, withCollaboration } = useNote();

  const handleSaving = async (content: JSONContent) => {
    await saveNote(content);
  };

  React.useEffect(() => {
    if (source?.content) {
      setContent(source.content as JSONContent);
    }
  }, [source]);

  React.useEffect(() => {
    if (!content) return;
    if (JSON.stringify(content) === JSON.stringify(source?.content)) {
      return;
    }

    const update = loadash.debounce(handleSaving, 1000);

    const interval = setTimeout(() => {
      update(content);
    }, 800);

    return () => clearTimeout(interval);
  }, [content]);

  if (!note)
    return (
      <div className="flex-1 flex justify-center items-center">
        <Loader />
      </div>
    );

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

      <div
        className={cx("px-4 md:px-12 viewer-editor")}
        key={`note-${note.id}`}
      >
        <EditorProvider
          // leading={
          //   !source && (
          //     <div className="pt-3 pb-3 px-4">
          //       <TemplatesList />
          //     </div>
          //   )
          // }
          withCollaboration={withCollaboration}
          documentName={`note-${note.id}`}
          defaultContent={content}
          onUpdate={(content) => setContent(content.getJSON())}
        />
      </div>
    </div>
  );
}

export default Viewer;
