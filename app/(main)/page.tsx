"use client";

import Loader from "@/components/loader/loader";
import { Kbd } from "@/components/ui/kbd";
import { useUser } from "@clerk/nextjs";
import { isMacOS } from "@tiptap/react";
import React from "react";

export default function Page() {
  const { user, isLoaded } = useUser();
  const isMac = isMacOS();

  if (!isLoaded)
    return (
      <div className={"w-full flex-1 flex items-center justify-center"}>
        <div>
          <Loader />
        </div>
      </div>
    );

  return (
    <div className={"w-full flex-1 flex items-center justify-center"}>
      <div className="flex flex-col gap-6">
        <div className="">
          <h1 className="text-xl font-semibold text-accent">
            Welcome back,{" "}
            <span className="text-foreground">{user?.firstName}</span> 👋
          </h1>
        </div>
        <div className={"text-muted-foreground flex flex-col"}>
          <h4 className={"font-medium"}>Select a note or Create a new one</h4>
          <p className={"text-sm max-w-72"}>
            You can select a note from the sidebar or press{" "}
            <Kbd>{isMac ? "Command" : "Ctrl"}</Kbd> + <Kbd>K</Kbd> to view its
            contents here
          </p>
        </div>
      </div>
    </div>
  );
}
