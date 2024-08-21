"use client";

import { Command } from "cmdk";
import React from "react";

import "@/components/editor/styles/commands/commands.css";
import { LucideIcon } from "lucide-react";

export interface Command {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export interface CommandMenu {
  items: Command[];
  command: (item: Command) => void;
  open?: boolean;
}

export default function Commands({ items, command, open }: CommandMenu) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [query, setQuery] = React.useState<string>("");

  const elementRef = React.useRef<HTMLDivElement>(null);

  const handleSelect = (item: Command) => {
    return command(item);
  };

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (e.key === "ArrowDown") {
        downHandler(e);
      } else if (e.key === "ArrowUp") {
        upHandler(e);
      } else if (e.key === "Enter") {
        console.log("Enter pressed");

        handleSelect(items[selectedIndex]);
        return false;
      }
    },
    [items, selectedIndex]
  );

  const downHandler = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    },
    [items]
  );

  const upHandler = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    },
    [items]
  );

  React.useEffect(() => {
    const navigationKeys = ["ArrowDown", "ArrowUp", "Enter"];

    const onKeyDown = (e: KeyboardEvent) => {
      if (navigationKeys.includes(e.key)) {
        e.preventDefault();

        if (elementRef.current) {
          elementRef.current.dispatchEvent(
            new KeyboardEvent("keydown", {
              key: e.key,
              cancelable: true,
              bubbles: true,
            })
          );
        }

        return false;
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Command
      ref={elementRef}
      className="border rounded-lg flex flex-col p-1 shadow-md min-w-32 bg-background"
      onKeyDown={(e) => e.stopPropagation()}
      id="slash-command-menu"
    >
      <Command.Input
        value={query}
        onValueChange={setQuery}
        style={{ display: "none" }}
      />
      <Command.List>
        {items.map((item, index) => {
          const Icon = item.icon
            ? React.createElement(item.icon, {
                className: "w-6 h-6",
              })
            : null;

          return (
            <Command.Item
              key={index}
              onSelect={() => handleSelect(item)}
              className="flex gap-1.5 justify-start items-center px-1 py-1 min-h-10 aria-selected:bg-accent/20 aria-selected:text-accent rounded-md group/cm-item select-none"
            >
              {Icon ? (
                <div className="w-10 h-10 rounded-md border grid place-content-center text-accent bg-background group-aria-selected/cm-item:border-accent/40">
                  {Icon}
                </div>
              ) : undefined}
              <div className="flex flex-col">
                <span className="text-sm font-medium">{item.title}</span>
                {item.description && (
                  <span className="text-xs text-muted-foreground group-aria-selected/cm-item:text-accent/60">
                    {item.description}
                  </span>
                )}
              </div>
            </Command.Item>
          );
        })}
      </Command.List>
    </Command>
  );
}
