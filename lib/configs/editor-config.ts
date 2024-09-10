import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";
import Dropcursor from "@tiptap/extension-dropcursor";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";

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
import TextAlign from "@tiptap/extension-text-align";
import HardBreak from "@tiptap/extension-hard-break";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";

import Command from "@/components/editor/extensions/features/command/commands.extension";
import suggestion from "@/components/editor/extensions/features/command/suggestion";
import codeblock from "@/components/editor/components/codeblock";

import { Extensions, JSONContent, ReactNodeViewRenderer } from "@tiptap/react";

import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";

import * as YWS from "y-websocket";

const lowlight = createLowlight(common);

lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);
lowlight.register("html", html);

interface CollaborationProvider {
    ydoc: Y.Doc;
    identifier: string;
    params?: {
        defaultContent: JSONContent;
    };
}

export const collaborationProvider = (
    ydoc: Y.Doc,
    identifier: string,
    params?: {
        defaultContent: JSONContent;
    },
) => new HocuspocusProvider({
    url: process.env.NEXT_PUBLIC_COLLABORATION_SERVER_URL ??
        "ws://localhost:1234",
    name: identifier,
    document: ydoc,
    parameters: params,
});

export const wsProvider = ({
    identifier,
    ydoc,
}: CollaborationProvider) =>
    new YWS.WebsocketProvider(
        process.env.NEXT_PUBLIC_COLLABORATION_SERVER_URL ??
            "ws://localhost:1234",
        identifier,
        ydoc,
    );

const defaultExtensions: Extensions = [
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

export default defaultExtensions;
