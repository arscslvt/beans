"use client";

import Cmdk from "@/components/cmdk/cmdk";
import React from "react";

interface CmdKContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CmdKContext = React.createContext<CmdKContextProps>(
  {} as CmdKContextProps
);

export default function CmdKProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const keysHandler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", keysHandler);
    return () => document.removeEventListener("keydown", keysHandler);
  }, []);

  return (
    <CmdKContext.Provider value={{ isOpen, setIsOpen }}>
      <Cmdk />
      {children}
    </CmdKContext.Provider>
  );
}
