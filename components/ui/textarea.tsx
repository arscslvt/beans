import * as React from "react";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultHeight?: number;
  autoSize?: boolean;
  maxRows?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, autoSize, defaultHeight, maxRows, ...props }, ref) => {
    const [height, setHeight] = useState(props.style?.height ?? "auto");
    const [value, setValue] = useState(props.value);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (textareaRef.current && autoSize) {
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (props.onChange) props.onChange(e);
      if (e.isDefaultPrevented()) return;

      setValue(e.target.value);
      if (autoSize)
        textareaRef.current!.style.height = defaultHeight
          ? `${defaultHeight}px`
          : "auto";
    };

    return (
      <textarea
        className={cn(
          autoSize ? "min-h-max" : "min-h-[60px]",
          "flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={textareaRef}
        {...props}
        style={{ height: defaultHeight ?? "auto", overflow: "hidden" }}
        onChange={handleChange}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
