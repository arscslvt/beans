"use client";

import CmdKProvider from "@/context/cmdk-context";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <CmdKProvider>{children}</CmdKProvider>;
}
