import { cx } from "class-variance-authority";
import React from "react";

export function MultipleFileShape({ active }: { active: boolean }) {
  return (
    <div className="grid place-content-center w-5 h-6 gap-2 relative">
      <FileShape
        active={active}
        className={cx(
          "absolute z-10 top-0 left-0 transition-all",
          active && "-rotate-6 -translate-x-[2px] scale-[1.1]"
        )}
      />

      <FileShape
        active={active}
        className={cx(
          "z-0 absolute top-0 left-0 transition-all",
          active && "rotate-6 translate-x-[2px] scale-[0.95] translate-y-[2px]"
        )}
      />
    </div>
  );
}

interface FileShapeProps extends React.HTMLAttributes<HTMLSpanElement> {
  active: boolean;
}

export default function FileShape({ active, ...props }: FileShapeProps) {
  return (
    <span className={cx("w-5 h-6 grid place-content-center", props.className)}>
      <span
        className={cx(
          "h-5 min-w-4 bg-white border-[1px] rounded-[2px] flex flex-col pt-[2px] px-[2px] gap-[1px] transition-all",
          active ? "border-accent/30" : "border-foreground/30"
        )}
      >
        <span
          className={cx(
            "w-full h-[1px] rounded-full",
            active ? "bg-accent" : "bg-foreground/30"
          )}
        ></span>
        <span
          className={cx(
            "w-2/3 h-[1px] rounded-full",
            active ? "bg-accent" : "bg-foreground/30"
          )}
        ></span>
        <span className="w-full h-[1px] rounded-full bg-foreground/30 mt-[2px]"></span>
        <span className="w-1/3 h-[1px] rounded-full bg-foreground/30"></span>
      </span>
    </span>
  );
}
