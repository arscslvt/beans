"use client";

import React from "react";
import Image from "next/image";

import SidebarLink from "@/components/sidebar/sidebar-link";
import SidebarGroup from "@/components/sidebar/sidebar-group";
import NewNoteButton from "@/components/sidebar/client/new-note-button";

import Magnifier3 from "@/components/icons/magnifier-3";

import Gear21 from "@/components/icons/gear-2-1";
import InboxArrowDown1 from "@/components/icons/inbox-arrow-down-1";
import House21 from "@/components/icons/house-2-1";

import BeansLogo from "@assets/logo/icon.svg";
import Link from "next/link";
import AuthUserButton from "./client/auth-user-button";
import { Button } from "../ui/button";

import ChevronLeft1 from "../icons/chevron-left-1";
import ChevronRight1 from "../icons/chevron-right-1";
import { cx } from "class-variance-authority";

import { AnimatePresence, motion } from "framer-motion";

const SidebarContext = React.createContext<{
  sidebarMode: "minimized" | "maximized";
  toggleSidebarMode: () => void;
}>({
  sidebarMode: "maximized",
  toggleSidebarMode: () => {},
});

export default function Sidebar({ children }: { children?: React.ReactNode }) {
  const [sidebarMode, setSidebarMode] = React.useState<
    "minimized" | "maximized"
  >("maximized");

  const toggleSidebarMode = () => {
    setSidebarMode((prev) =>
      prev === "maximized" ? "minimized" : "maximized"
    );
  };

  const sidebarAnimation = {
    open: { width: 256, transition: { duration: 0.2 } },
    closed: { width: 66 },
  };

  return (
    <SidebarContext.Provider value={{ sidebarMode, toggleSidebarMode }}>
      <motion.div
        className={cx(
          "flex flex-col sticky top-0 left-0 h-dvh max-h-dvh bg-background"
        )}
        variants={sidebarAnimation}
        initial={"open"}
        animate={sidebarMode === "maximized" ? "open" : "closed"}
        exit={"exit"}
        transition={{ duration: 0.2 }}
      >
        <div
          className={"flex flex-col flex-grow-0 flex-shrink-0 bg-background"}
        >
          <div
            className={
              "flex items-center justify-between gap-2 pt-6 pl-4 pr-2 select-none"
            }
          >
            {sidebarMode === "maximized" && (
              <Link
                href={"/"}
                className={
                  "hover:scale-105 active:scale-95 transition-transform"
                }
              >
                <Image
                  src={BeansLogo}
                  alt={"Beans Logo"}
                  width={28}
                  height={28}
                  className={"pointer-events-none"}
                />
              </Link>
            )}

            <div>
              <Button
                size={"icon"}
                variant={"ghost"}
                className={cx(
                  sidebarMode === "maximized" && "w-6 h-6",
                  "transition-all"
                )}
                onClick={toggleSidebarMode}
              >
                {sidebarMode === "minimized" ? (
                  <ChevronRight1 />
                ) : (
                  <ChevronLeft1 />
                )}
              </Button>
            </div>
          </div>
          <SidebarGroup>
            <SidebarLink symbol={<Magnifier3 />} role={"button"} preview>
              Search
            </SidebarLink>
            <SidebarLink symbol={<House21 />} href={"/"}>
              Home
            </SidebarLink>
            <SidebarLink symbol={<InboxArrowDown1 />} preview>
              Inbox
            </SidebarLink>
            <SidebarLink symbol={<Gear21 />} preview>
              Settings
            </SidebarLink>
          </SidebarGroup>
        </div>

        <SidebarGroup className={"!py-0"}>
          <NewNoteButton />
        </SidebarGroup>

        <div className={"flex flex-col gap-2 relative flex-1 overflow-y-auto"}>
          <AnimatePresence>
            {sidebarMode === "maximized" && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: sidebarMode === "maximized" ? 1 : 0,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className={
            "flex-1 flex flex-col flex-grow-0 flex-shrink-0 justify-end bg-background"
          }
        >
          <SidebarGroup>
            <AuthUserButton />
          </SidebarGroup>
        </div>
      </motion.div>
    </SidebarContext.Provider>
  );
}

const useSidebar = () => React.useContext(SidebarContext);

export { SidebarLink, SidebarGroup, useSidebar };
