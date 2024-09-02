"use client";

import React, { forwardRef } from "react";
import {
  ReactNodeViewRenderer,
  JSONContent,
  EditorProvider,
} from "@tiptap/react";

import "./styles/default.css";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import Dropcursor from "@tiptap/extension-dropcursor";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { common, createLowlight } from "lowlight";

import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Code from "@tiptap/extension-code";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Typography from "@tiptap/extension-typography";
import History from "@tiptap/extension-history";
import TextAlign from "@tiptap/extension-text-align";
import HardBreak from "@tiptap/extension-hard-break";

import Command from "@/components/editor/extensions/features/command/commands.extension";
import suggestion from "./extensions/features/command/suggestion";
import BubbleMenu from "./extensions/features/bubble-menu/bubble-menu";
import codeblock from "@/components/editor/components/codeblock";

import * as Y from "yjs";

import { toast } from "sonner";
import { useNote } from "@/hooks/useNote";
import Collaborate from "./tools/collaborate";
import { HocuspocusProvider } from "@hocuspocus/provider";
import { useClientAuth } from "@/context/client-auth-context";

interface EditorProps {
  readonly leading?: React.ReactNode;
  readonly trailing?: React.ReactNode;
  readonly defaultContent?: string;
  readonly onChange?: (content: JSONContent) => void;
}

const lowlight = createLowlight(common);

lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);
lowlight.register("html", html);

const extensions = [
  Placeholder.configure({
    placeholder: "Write something or press '/' for commands...",
  }),
  Document,
  Dropcursor,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Paragraph.configure({
    HTMLAttributes: {
      class: "mb-4",
    },
  }),
  Heading.configure({
    levels: [1, 2, 3, 4],
  }),
  Text.configure({
    HTMLAttributes: {
      class: "text-base",
    },
  }),
  BulletList,
  ListItem,
  CodeBlockLowlight.extend({
    addNodeView() {
      return ReactNodeViewRenderer(codeblock);
    },
  }).configure({ lowlight }),

  Typography,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Subscript,
  Superscript,
  HardBreak,
  Command.configure({
    suggestion,
  }),
];

export const Editor = forwardRef<HTMLDivElement, EditorProps>(
  ({ defaultContent, onChange, leading, trailing, ...rest }, ref) => {
    const { note } = useNote();
    const { profile } = useClientAuth();

    if (!note || !profile) {
      return null;
    }

    const ydoc = new Y.Doc();

    const provider = new HocuspocusProvider({
      url: " ws://0.0.0.0:3008",
      name: `note-${note.id}`,
      document: ydoc,
    });

    const availbleColors = [
      "#9333ea",
      "#db2777",
      "#db2777",
      "#0891b2",
      "#059669",
      "#ca8a04",
      "#ea580c",
      "#dc2626",
    ];

    return (
      <EditorProvider
        extensions={[
          Collaboration.configure({
            document: ydoc,
          }),
          CollaborationCursor.configure({
            provider,
            user: {
              name: profile?.handle,
              color:
                availbleColors[
                  Math.floor(Math.random() * availbleColors.length)
                ],
            },
          }),
          ...extensions,
        ]}
        content={defaultContent}
        editorProps={{
          attributes: {
            class:
              "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
          },
        }}
        autofocus
        editable
        injectCSS={false}
        enableContentCheck
        onContentError={({ error }) => {
          toast.error("There was an error loading note content.", {
            duration: 10000,
            description:
              "If you created this note before 22 August 2024, you may need to recreate it. Sorry for the inconvenience.",
          });
        }}
        onUpdate={({ editor }) => {
          onChange?.(editor.getJSON());
        }}
        slotBefore={leading}
        slotAfter={trailing}
        {...rest}
      >
        {/* <Collaborate doc={doc} /> */}
        <BubbleMenu />
      </EditorProvider>
    );
  }
);

export default Editor;
