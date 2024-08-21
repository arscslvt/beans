"use client";

import React from "react";

export default function Page() {
  return (
    <div className={"w-full flex-1 flex items-center justify-center"}>
      <div className={"text-muted-foreground flex flex-col items-center"}>
        <h4 className={"font-medium"}>Select a note to view</h4>
        <p className={"text-sm max-w-72 text-center"}>
          You can select a note from the sidebar to view its contents here
        </p>
      </div>
    </div>
  );
}
