"use client";

import { DatabaseSource } from "@/types/source.types";
import React from "react";
import Header from "@editorjs/header";
import ViewerHeader from "@/components/viewer/viewer-header";
import { DatabaseNote } from "@/types/note.types";
import { toast } from "sonner";
import NestedList from "@editorjs/nested-list";
// @ts-ignore
import Table from "@editorjs/table";
// @ts-ignore
import Marker from "@editorjs/marker";
// @ts-ignore
import { EditorCore } from "@react-editor-js/core";
// @ts-ignore
import Quote from "@editorjs/quote";

import { createReactEditorJS } from "react-editor-js";
import { saveEdits } from "@/utils/notes/save";
import { useMediaQuery } from "usehooks-ts";
import { MOBILE_MAX_WIDTH } from "@/components/screen-query";
import { cx } from "class-variance-authority";
import TemplatesList from "./template/template-list";
import { OutputData } from "@editorjs/editorjs";
import EditorImage from "../editor/tools/editor-image";

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

      {/* <div className="pb-3 px-4 md:px-16">
        <CommentsGroup title="Comments">
          <CommentItem
            comment={{
              id: 1,
              source_id: 2,
              comment_id: 3,
              content: "I'm not sure about this plan. Can we discuss it?",
              created_at: "2021-09-01T00:00:00Z",
              edited: false,
              profile_id: "test",
            }}
          />
        </CommentsGroup>
      </div> */}

      <div className={cx("px-2 viewer-editor")}>
        <ReactEditorJS
          onInitialize={handleInitialize}
          // onReady={handleReady}
          onChange={handleSaving}
          defaultValue={source?.content}
          tools={{
            image: EditorImage,
            header: Header,
            list: NestedList,
            table: Table,
            quote: Quote,
            Marker: {
              class: Marker,
              shortcut: "CMD+SHIFT+M",
            },
          }}
          autofocus
          placeholder={
            source
              ? "Write something or press '/' for commands..."
              : "Choose a template, start writing or press '/' for commands..."
          }
          holder={"editorjs"}
        />
      </div>
    </div>
  );
}

export default Viewer;
