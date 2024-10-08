"use client";

import React from "react";
import SidebarLink from "@/components/sidebar/sidebar-link";
import Plus1 from "@/components/icons/plus-1";
import { cx } from "class-variance-authority";
import { useNote } from "@/hooks/useNote";

const NewNoteButton = ({ shine }: { shine?: boolean }) => {
  const { newNote } = useNote();

  return (
    <SidebarLink
      symbol={<Plus1 fill={shine ? "hsl(var(--accent))" : undefined} />}
      onClick={newNote}
      variant={shine ? "shine" : "default"}
    >
      {shine && (
        <div
          className={
            "absolute z-0 top-0 right-0 w-full h-full flex items-center justify-center"
          }
        >
          <div
            className={
              "z-0 h-52 w-[20px] bg-gradient-to-r from-transparent to-accent animate-spin"
            }
            style={{
              animationDuration: "3s",
            }}
          />
          <div className={"absolute z-10 top-0 left-0 w-full h-full p-[1px]"}>
            <div
              className={
                "relative z-10 w-full h-full bg-background rounded-[4px] overflow-clip"
              }
            >
              <div
                className={
                  "relative z-10 w-full h-full bg-accent/10 group-hover/sidebar-link:bg-accent/20 transition-colors"
                }
              />
            </div>
          </div>
        </div>
      )}

      <span
        className={cx(
          shine ? "text-accent" : "text-muted-foreground",
          "relative z-10",
          "group-hover/sidebar-link:text-accent"
        )}
      >
        New note
      </span>
    </SidebarLink>
  );
};

export default NewNoteButton;
