"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export interface Command {
  title: string;
  icon: React.ReactElement;
}

export interface CommandMenu {
  items: Command[];
  command: (item: Command) => void;
  open?: boolean;
}

export default function Commands({ items, command, open }: CommandMenu) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
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
    <div
      ref={elementRef}
      className="border rounded-lg flex flex-col p-1 shadow-md min-w-32"
      onKeyDown={handleKeyDown}
    >
      {items.map((item, k) => (
        <Button
          variant={k === selectedIndex ? "default" : "ghost"}
          key={k}
          onClick={() => handleSelect(item)}
          className="justify-start px-2"
        >
          {item.icon &&
            React.cloneElement(item.icon, { className: "w-5 h-5 mr-1" })}
          {item.title}
        </Button>
      ))}
    </div>
  );
}
