"use client";

import React from "react";
import SidebarLink from "@/components/sidebar/sidebar-link";
import {cx} from "class-variance-authority";

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    children?: React.ReactNode;
    disableSticky?: boolean;
}

const SidebarGroup = ({children, title, disableSticky = false, ...props} : SidebarGroupProps) => {
    return (
        <div className={cx("flex flex-col py-3", !disableSticky && "relative", props.className )} {...props}>
            {title && <div className={cx("pb-1 pt-2 px-3 top-0 bg-gradient-to-b from-40% from-background to-transparent", !disableSticky && "sticky z-10")}>
                <h1 className={"text-xs font-medium text-muted-foreground select-none"}>{title}</h1>
            </div>}
            <div className={"relative z-0 flex flex-col px-2"}>
                {children}
            </div>
        </div>
    )
}

export default SidebarGroup;