import "@/components/editor/styles/codeblock.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";

export default ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}: {
  node: { attrs: { language: string } };
  updateAttributes: (args: any) => void;
  extension: any;
}) => (
  <NodeViewWrapper className="bg-foreground rounded-md p-2 px-3 my-3 first:mt-0 shadow-inner shadow-white/30 border border-white/30">
    <Select
      defaultValue={defaultLanguage}
      onValueChange={(value) => updateAttributes({ language: value })}
    >
      <SelectTrigger className="w-max h-7 bg-transparent border-0 text-background px-0 focus:ring-0">
        <SelectValue
          placeholder="Select a language"
          className="text-xs capitalize"
        />
      </SelectTrigger>
      <SelectContent>
        {extension.options.lowlight
          .listLanguages()
          .map((lang: any, index: number) => (
            <SelectItem key={index} value={lang}>
              {lang}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
    <pre className="font-mono mt-3 pb-2 ">
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
);
