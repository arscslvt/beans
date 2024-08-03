"use client";

import React from "react";
import IconProps from "@/types/icon.types";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";

interface MenubarItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon: React.ReactElement<IconProps> | React.ReactNode,
    label: string;
    href?: string;
    preview?: boolean;
}

const MenubarItem = ({icon, label, href, preview, ...props}: MenubarItemProps) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(preview) toast.info("Feature not available.", {
            description: "We're currently building this feature. It will be available in the next version of Beans.",
            duration: 6000,
            position: "top-center"
        });

        if(props.onClick) props.onClick(e);
    }
    return (
        <Button size={"icon"} variant={"ghost"} className={"rounded-full"} onClick={handleClick}>
            {
                React.cloneElement(icon as React.ReactElement<IconProps>, {
                    height: "20",
                    width: "20"
                })
            }
        </Button>
    );
}

export {MenubarItem};