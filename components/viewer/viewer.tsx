"use client";

import { DatabaseSource } from "@/types/source.types";
import React from "react";
import Header from "@editorjs/header";
import ViewerHeader from "@/components/viewer/viewer-header";
import { DatabaseNote } from "@/types/note.types";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import NestedList from "@editorjs/nested-list";
// @ts-ignore
import Table from "@editorjs/table";
// @ts-ignore
import Marker from "@editorjs/marker";
// @ts-ignore
import Underline from "@editorjs/underline";
import { EditorCore } from "@react-editor-js/core";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import Warning from "@editorjs/warning";

import { createReactEditorJS } from "react-editor-js";
import { createSource, saveEdits, saveSource } from "@/utils/notes/save";
import { useMediaQuery } from "usehooks-ts";
import { MOBILE_MAX_WIDTH } from "@/components/screen-query";
import { cx } from "class-variance-authority";
import TemplatesList from "./template/template-list";
import { OutputData } from "@editorjs/editorjs";

interface ViewerProps {
  note: DatabaseNote;
  source?: DatabaseSource;
}

function Viewer({ note, source }: ViewerProps) {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH}px)`);

  const ReactEditorJS = createReactEditorJS();

  const editorCore = React.useRef<EditorCore | null>(null);

  const handleInitialize = React.useCallback(
    (instance: EditorCore) => {
      editorCore.current = instance;
    },
    [editorCore.current]
  );

  const handleReady = React.useCallback(() => {
    if (!editorCore.current) return;
    const editor = editorCore.current;
  }, [editorCore.current]);

  const handleSaving = async () => {
    if (!editorCore.current) return;

    const savedData = await editorCore.current.save();

    console.log("Editor data: ", savedData);

    const { data, error } = await saveEdits(note.id, {
      content: savedData,
    });

    if (error) {
      console.error("Error saving source: ", error);
      return toast.error("Error saving source.");
    }

    console.log("Saved note source: ", data);
  };

  const handleTemplate = async (data: OutputData) => {
    if (!editorCore.current) return;

    try {
      await editorCore.current.clear();
    } catch (e) {}

    await editorCore.current.render(data);
  };

  return (
    <div>
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

      <div className={cx("px-2 viewer-editor")}>
        <ReactEditorJS
          onInitialize={handleInitialize}
          // onReady={handleReady}
          onChange={handleSaving}
          defaultValue={source?.content}
          tools={{
            header: Header,
            list: NestedList,
            table: Table,
            quote: Quote,
            Marker: {
              class: Marker,
              shortcut: "CMD+SHIFT+M",
            },
          }}
          placeholder={
            source
              ? "Start writing your note..."
              : "Select a template or start writing your note..."
          }
          holder={"editorjs"}
        />
      </div>
    </div>
  );
}

export default Viewer;
