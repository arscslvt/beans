"use client";

import React from "react";
import SidebarLink from "@/components/sidebar/sidebar-link";
import { cx } from "class-variance-authority";
import Scribble1 from "../icons/scribble-1";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
  disableSticky?: boolean;
  fallback?: React.ReactNode;
}

const SidebarGroup = ({
  children,
  title,
  disableSticky = false,
  fallback,
  ...props
}: SidebarGroupProps) => {
  const isEmpty =
    !children ||
    (Array.isArray(children) && children.length === 0) ||
    (Array.isArray(children) && children.filter(Boolean).length === 0);

  return (
    <div
      className={cx(
        "flex flex-col py-3",
        !disableSticky && "relative",
        props.className
      )}
      {...props}
    >
      {title && (
        <div
          className={cx(
            "pb-1 pt-2 px-3 top-0 bg-gradient-to-b from-40% from-background to-transparent",
            !disableSticky && "sticky z-10"
          )}
        >
          <h1
            className={"text-xs font-medium text-muted-foreground select-none"}
          >
            {title}
          </h1>
        </div>
      )}
      <div className={"relative z-0 flex flex-col px-2"}>
        {isEmpty ? fallback : children}
      </div>
    </div>
  );
};

interface SidebarFallbackProps {
  icon?: React.ReactElement;
  title?: string;
  children?: React.ReactNode;
}

export const SidebarFallback = ({
  icon,
  title,
  children,
}: SidebarFallbackProps) => {
  const Icon = icon
    ? React.cloneElement(icon, {
        className: "text-accent",
        width: "1.3em",
        height: "1.3em",
        strokewidth: 1.6,
      })
    : null;

  return (
    <div className={"flex items-start gap-2 pt-2 px-1"}>
      {Icon && <span className={"text-accent"}>{Icon}</span>}
      <div className={"text-xs"}>
        <h4 className={"font-medium"}>{title ?? "Nothing here."}</h4>
        <p className={"text-muted-foreground pr-0.5"}>
          {children ?? "It's pretty empty and cold here. Mmh."}
        </p>
      </div>
    </div>
  );
};

export default SidebarGroup;
