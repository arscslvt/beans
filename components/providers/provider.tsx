"use client";

import ClientAuthProvider from "@/context/client-auth-context";
import CmdKProvider from "@/context/cmdk-context";
import NoteProvider from "@/context/notes-context";
import FeaturesProvider from "@/context/features-context";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientAuthProvider>
        <FeaturesProvider>
          <NoteProvider>
            <CmdKProvider>{children}</CmdKProvider>
          </NoteProvider>
        </FeaturesProvider>
      </ClientAuthProvider>
    </>
  );
}
