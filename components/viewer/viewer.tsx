"use client";

import { DatabaseSource } from "@/types/source.types";
import React, { useState } from "react";
import ViewerHeader from "@/components/viewer/viewer-header";
import { DatabaseNote } from "@/types/note.types";
import { useMediaQuery } from "usehooks-ts";
import { MOBILE_MAX_WIDTH } from "@/components/screen-query";
import { cx } from "class-variance-authority";
import TemplatesList from "./template/template-list";
import Editor from "../editor/editor";
import { JSONContent, useCurrentEditor } from "@tiptap/react";
import loadash from "lodash";
import { useNote } from "@/hooks/useNote";

interface ViewerProps {
  note: DatabaseNote;
  source?: DatabaseSource;
}

function Viewer({ note, source }: ViewerProps) {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
  const editorRef = React.useRef<HTMLDivElement>(null);

  const currentEditor = useCurrentEditor();

  const [content, setContent] = React.useState<JSONContent>(
    source?.content as JSONContent
  );

  const { saveNote } = useNote();

  const handleSaving = async (content: JSONContent) => {
    if (!editorRef.current) return;

    const data = await saveNote(content);

    console.log("Saved note source: ", data);
  };

  const handleTemplate = async (data: JSONContent) => {
    if (!editorRef.current) return;

    console.log("Current editor: ", currentEditor);

    currentEditor.editor?.setOptions({
      content: data,
    });
  };

  React.useEffect(() => {
    if (source?.content) {
      setContent(source.content as JSONContent);
    }
  }, [source]);

  React.useEffect(() => {
    if (content === source?.content) return;

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
      />

      {!source && (
        <div className="pt-3 pb-3 px-4 md:px-16">
          <TemplatesList onOuput={handleTemplate} />
        </div>
      )}

      <div className={cx("px-4 md:px-12 viewer-editor")}>
        <Editor
          defaultContent={content as unknown as string}
          ref={editorRef}
          onChange={(content) => setContent(content)}
        />
      </div>
    </div>
  );
}

export default Viewer;
