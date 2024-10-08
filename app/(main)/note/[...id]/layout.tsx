import React from "react";
import { isMobileDevice } from "@/utils/device";

export default function Layout({
  children,
  sources,
}: {
  children: React.ReactNode;
  sources: React.ReactNode;
}) {
  const isMobile = isMobileDevice();

  return (
    <div className={"flex h-full"}>
      <div className={"flex-1 overflow-y-auto flex"}>{children}</div>
      {!isMobile && sources}
    </div>
  );
}
