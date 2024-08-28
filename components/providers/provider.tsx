"use client";

import ClientAuthProvider from "@/context/client-auth-context";
import CmdKProvider from "@/context/cmdk-context";
import NoteProvider from "@/context/notes-context";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientAuthProvider>
        <NoteProvider>
          <CmdKProvider>{children}</CmdKProvider>
        </NoteProvider>
      </ClientAuthProvider>
    </>
  );
}
