"use client";

import CmdKProvider from "@/context/cmdk-context";
import NoteProvider from "@/context/notes-context";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NoteProvider>
        <CmdKProvider>{children}</CmdKProvider>
      </NoteProvider>
    </>
  );
}
