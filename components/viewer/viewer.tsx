"use client";

import { DatabaseSource } from "@/types/source.types";
import React from "react";
import ViewerHeader from "@/components/viewer/viewer-header";
import { DatabaseNote } from "@/types/note.types";
import { toast } from "sonner";
import { saveEdits } from "@/utils/notes/save";
import { useMediaQuery } from "usehooks-ts";
import { MOBILE_MAX_WIDTH } from "@/components/screen-query";
import { cx } from "class-variance-authority";
import TemplatesList from "./template/template-list";
import Editor from "../editor/editor";
import { JSONContent } from "@tiptap/react";
import loadash from "lodash";

interface ViewerProps {
  note: DatabaseNote;
  source?: DatabaseSource;
}

function Viewer({ note, source }: ViewerProps) {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
  const editorRef = React.useRef<HTMLDivElement>(null);

  const [content, setContent] = React.useState<JSONContent>(source?.content);

  const handleSaving = async (content: JSONContent) => {
    if (!editorRef.current) return;

    console.log("Editor data: ", content);

    const { data, error } = await saveEdits(note.id, {
      content: JSON.parse(JSON.stringify(content)),
    });

    if (error) {
      console.error("Error saving source: ", error);
      return toast.error("Error saving source.");
    }

    console.log("Saved note source: ", data);
  };

  const handleTemplate = async (data: JSONContent) => {
    if (!editorRef.current) return;

    // try {
    //   await editorRef.current.clear();
    // } catch (e) {}

    // await editorCore.current.render(data);
  };

  React.useEffect(() => {
    if (source?.content) {
      setContent(source.content);
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
          defaultContent={source?.content}
          ref={editorRef}
          onChange={(content) => setContent(content)}
        />
      </div>
    </div>
  );
}

export default Viewer;
