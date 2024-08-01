import React from "react";
import SidebarLink from "@/components/sidebar/sidebar-link";

interface SidebarGroupProps {
    title?: string;
    children: React.ReactNode;
}

const SidebarGroup = ({children, title} : SidebarGroupProps) => {
    return (
        <div className={"flex flex-col py-3 relative"}>
            {title && <div className={"pb-1 px-3 sticky top-0 bg-gradient-to-b from-40% from-background to-transparent"}>
                <h1 className={"text-xs font-medium text-muted-foreground select-none"}>{title}</h1>
            </div>}
            <div className={"flex flex-col px-2"}>
                {children}
            </div>
        </div>
    )
}

export default SidebarGroup;