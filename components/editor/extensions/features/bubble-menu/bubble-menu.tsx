import React from "react";
import { BubbleMenu as TTBubbleMenu, Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  LucideIcon,
  Strikethrough,
  Underline,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type MarkType = {
  icon: LucideIcon;
  name: string;
  command: (editor: Editor) => void;
};

export default function BubbleMenu({ editor }: { editor: Editor }) {
  const marks: MarkType[] = [
    {
      icon: Bold,
      name: "bold",
      command: (editor) => editor.chain().focus().toggleBold().run(),
    },
    {
      icon: Italic,
      name: "italic",
      command: (editor) => editor.chain().focus().toggleItalic().run(),
    },
    {
      icon: Strikethrough,
      name: "strike",
      command: (editor) => editor.chain().focus().toggleStrike().run(),
    },
    {
      icon: Underline,
      name: "underline",
      command: (editor) => editor.chain().focus().toggleUnderline().run(),
    },
  ];

  const layouts: MarkType[] = [
    {
      icon: AlignLeft,
      name: "left",
      command: (editor) => editor.chain().focus().setTextAlign("left"),
    },
    {
      icon: AlignCenter,
      name: "center",
      command: (editor) => editor.chain().focus().setTextAlign("center"),
    },
    {
      icon: AlignRight,
      name: "right",
      command: (editor) => editor.chain().focus().setTextAlign("right"),
    },
  ];

  return (
    <TTBubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <div className="border rounded-md shadow-md overflow-clip flex divide-x bg-background">
        <div>
          {marks.map((mark) => (
            <Button
              key={mark.name}
              size={"icon"}
              variant={editor.isActive(mark.name) ? "default" : "ghost"}
              onClick={() => mark.command(editor)}
              className="rounded-none"
            >
              {React.createElement(mark.icon, { className: "w-4 h-4" })}
            </Button>
          ))}
        </div>
        <div>
          {layouts.map((layout) => (
            <Button
              key={layout.name}
              size={"icon"}
              variant={
                editor.isActive({ textAlign: layout.name })
                  ? "default"
                  : "ghost"
              }
              onClick={() => layout.command(editor)}
              className="rounded-none"
            >
              {React.createElement(layout.icon, { className: "w-4 h-4" })}
            </Button>
          ))}
        </div>
      </div>
    </TTBubbleMenu>
  );
}
