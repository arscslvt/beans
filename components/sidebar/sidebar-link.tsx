"use client";

import React, {HTMLAttributes, useMemo} from "react";
import {cva, cx, VariantProps} from "class-variance-authority";
import IconProps from "@/types/icon.types";
import {usePathname, useRouter} from "next/navigation";

const sidebarLinkVariants = cva("px-3 py-2.5 text-sm flex justify-start select-none items-center gap-1.5 rounded-md", {
    variants: {
        variant: {
            default: "group/default hover:bg-gradient-to-t hover:from-accent/10 border border-transparent hover:border-accent/20",
            active: "bg-gradient-to-b from-accent to-accent-darker text-accent-foreground font-medium shadow-white/20 shadow-inner border border-accent-darker",
            shine: "border border-accent/20",
        }
    },
    defaultVariants: {
        variant: "default"
    }

})

interface SidebarLinkProps extends VariantProps<typeof sidebarLinkVariants>, HTMLAttributes<HTMLDivElement>{
    symbol?: string | React.ReactElement<IconProps>,
    href?: string,
    trailing?: React.ReactNode
}

export const SidebarLink = ({variant, symbol, href, ...props} : SidebarLinkProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = useMemo(() => pathname === href, [href, pathname])

    return (
        <div
            className={cx(sidebarLinkVariants({variant: variant ? variant : isActive ? "active" : "default"}), "group/sidebar-link flex justify-between items-center relative overflow-clip")}
            onClick={href ? () => router.push(href) : props.onClick}
            data-active={isActive}
        >
            <div className={"flex items-center gap-1"}>
                {symbol ? typeof symbol === "string" ? <span>{symbol}</span> : <span className={"relative z-20"}>{React.cloneElement(symbol as React.ReactElement<IconProps>, {
                    height: "18",
                    width: "18"
                })}</span> : <></>}
                <span className={"group-hover/default:translate-x-1 transition-transform leading-[13px]"}>{props.children || "Unknown bean"}</span>
            </div>

            {props.trailing}
        </div>
    )
}

export default SidebarLink;