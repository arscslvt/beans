import React from "react";

export const Kbd = ({ children }: { children: React.ReactNode }) => {
  return (
    <kbd className="bg-muted/60 border border-muted-foreground/50 shadow-inner rounded-sm px-1">
      {children}
    </kbd>
  );
};
