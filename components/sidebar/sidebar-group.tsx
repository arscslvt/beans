import React from "react";
import SidebarLink from "@/components/sidebar/sidebar-link";

interface SidebarGroupProps {
    title?: string;
    children: React.ReactNode;
}

const SidebarGroup = ({children, title} : SidebarGroupProps) => {
    return (
        <div className={"flex flex-col py-3"}>
            {title && <div className={"pb-1 px-3"}>
                <h1 className={"text-xs font-medium text-muted-foreground select-none"}>{title}</h1>
            </div>}
            {children}
        </div>
    )
}

export default SidebarGroup;