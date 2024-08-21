"use client";

import React from "react";

import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import NotesDrawer from "@/components/drawers/notes-drawer";
import { MenubarItem } from "./menubar-item";
import Magnifier1 from "../icons/magnifier-1";
import StackPerspective1 from "../icons/stack-perspective-1";
import { useCmdK } from "@/hooks/useCmdK";

function Menubar() {
  const { setIsOpen } = useCmdK();
  return (
    <div
      className={
        "fixed bottom-0 left-0 w-dvw h-20 flex justify-center py-3 z-50"
      }
    >
      <div
        className={
          "flex items-center rounded-2xl border shadow-lg h-14 px-2.5 gap-2 bg-background"
        }
      >
        <Drawer>
          <DrawerTrigger asChild>
            <MenubarItem
              icon={<StackPerspective1 />}
              label={"Notes"}
              href={"/"}
            />
          </DrawerTrigger>
          <NotesDrawer />
        </Drawer>
        <MenubarItem
          icon={<Magnifier1 />}
          label={"Search"}
          href={"/"}
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
}

export default Menubar;
