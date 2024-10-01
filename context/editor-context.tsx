import React, { useEffect, useMemo } from "react";
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react";
import defaultExtensions, {
  collaborationProvider,
  wsProvider,
} from "@/lib/configs/editor-config";
import BubbleMenu from "@/components/editor/extensions/features/bubble-menu/bubble-menu";

import "../components/editor/styles/default.css";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Collaboration from "@tiptap/extension-collaboration";

import * as Y from "yjs";
import { useClientAuth } from "./client-auth-context";

interface EditorContextProps {
  editor: Editor;
}

export const EditorContext = React.createContext<EditorContextProps>(
  {} as EditorContextProps
);

interface EditorProviderProps {
  documentName: string;
  defaultContent?: JSONContent;
  onUpdate?: (editor: Editor) => void;
  withCollaboration?: boolean;
}

const cursorColors = [
  "#EF4444",
  "#0D9488",
  "#F59E0B",
  "#4F46E5",
  "#D946EF",
  "#0E7490",
];

export default function EditorProvider({
  defaultContent,
  onUpdate,
  documentName,
  withCollaboration = false,
}: EditorProviderProps) {
  const ydoc = new Y.Doc();
  const { profile } = useClientAuth();

  const collaborationProvider = useMemo(
    () =>
      withCollaboration &&
      wsProvider({
        identifier: documentName,
        ydoc,
      }),
    [documentName]
  );

  const editor = useEditor({
    extensions: [
      ...defaultExtensions,
      ...(withCollaboration
        ? [
            Collaboration.configure({
              document: ydoc,
            }),
          ]
        : []),
      ...(withCollaboration
        ? [
            CollaborationCursor.configure({
              provider: collaborationProvider,
              user: {
                name: profile?.full_name ?? "Anonymous",
                color:
                  cursorColors[Math.floor(Math.random() * cursorColors.length)],
              },
            }),
          ]
        : []),
    ],
    content: defaultContent,
    autofocus: true,
    editable: true,
    injectCSS: false,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-4 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      if (onUpdate) onUpdate(editor);
    },
  });

  useEffect(() => {
    if (!collaborationProvider || !withCollaboration) return;
    collaborationProvider.connect();

    collaborationProvider.on("error", (error: any) => {
      console.error(error);
    });
  }, [collaborationProvider, withCollaboration]);

  if (!editor) return null;
  return (
    <EditorContext.Provider value={{ editor }}>
      <BubbleMenu editor={editor} />
      <EditorContent editor={editor} />
    </EditorContext.Provider>
  );
}
