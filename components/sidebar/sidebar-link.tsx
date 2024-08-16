"use client";

import React, { HTMLAttributes, useMemo } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";
import IconProps from "@/types/icon.types";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useSidebar } from "./sidebar";
import { AnimatePresence, motion } from "framer-motion";
import FileShape, { MultipleFileShape } from "../shapes/file-shape";

const sidebarLinkVariants = cva(
  "px-3 text-sm flex justify-start select-none items-center gap-1.5 rounded-md",
  {
    variants: {
      variant: {
        default:
          "group/default hover:bg-gradient-to-t hover:from-accent/10 border border-transparent hover:border-accent/20 transition-colors duration-100",
        active:
          "bg-gradient-to-b from-accent to-accent-darker text-accent-foreground font-medium shadow-white/20 shadow-inner border border-accent-darker",
        shine: "border border-accent/20",
        disabled: "text-muted-foreground cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SidebarLinkProps
  extends VariantProps<typeof sidebarLinkVariants>,
    HTMLAttributes<HTMLDivElement> {
  symbol?: string | React.ReactElement<IconProps>;
  href?: string;
  trailing?: React.ReactNode;
  disabled?: boolean;
  preview?: boolean;
}

export const SidebarLink = ({
  variant,
  symbol,
  href,
  preview,
  disabled,
  ...props
}: SidebarLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = useMemo(() => pathname === href, [href, pathname]);

  const { sidebarMode } = useSidebar();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (preview)
      toast.info("Feature not available.", {
        description:
          "We're currently building this feature. It will be available in the next version of Beans.",
        duration: 6000,
      });

    if (disabled) return;

    if (props.onClick) props.onClick(e);
    if (href) router.push(href);
  };

  const boxAnim = {
    initial: { paddingLeft: 10, paddingRight: 10 },
    open: {
      paddingLeft: 10,
      paddingRight: 10,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    closed: { paddingLeft: 14, paddingRight: 8 },
  };

  const spanAnim = {
    initial: { width: 0, opacity: 0, display: "none", paddingLeft: 0 },
    open: {
      width: "auto",
      opacity: 1,
      display: "block",
      paddingLeft: 8,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    closed: { width: 0, opacity: 0, display: "none", paddingLeft: 0 },
  };

  return (
    <div
      data-href={href}
      role={href ? "link" : undefined}
      className={cx(
        sidebarLinkVariants({
          variant: variant
            ? variant
            : isActive
            ? "active"
            : disabled
            ? "disabled"
            : "default",
        }),
        "group/sidebar-link min-h-[2.7rem] flex justify-between items-center text-left relative overflow-clip !px-0",
        props.className
      )}
      onClick={handleClick}
      data-active={isActive}
      {...props}
    >
      <motion.div
        variants={boxAnim}
        animate={sidebarMode === "maximized" ? "open" : "closed"}
        initial={"initial"}
        className={cx(
          "flex flex-1 items-center overflow-hidden whitespace-nowrap",
          sidebarMode === "maximized" ? "justify-start" : "justify-start"
        )}
      >
        {symbol ? (
          typeof symbol === "string" ? (
            <span>{symbol}</span>
          ) : (
            <span
              className={cx(
                "relative z-20 transition-colors",
                !isActive && "group-hover/sidebar-link:text-accent"
              )}
            >
              {React.cloneElement(symbol as React.ReactElement<IconProps>, {
                height: "18",
                width: "18",
              })}
            </span>
          )
        ) : (
          <MultipleFileShape active={isActive} />
        )}
        <AnimatePresence>
          {
            <motion.span
              variants={spanAnim}
              initial={"open"}
              animate={sidebarMode === "maximized" ? "open" : "closed"}
              className={
                "group-hover/default:translate-x-1 transition-transform leading-[14px] py-[3px] text-ellipsis overflow-hidden flex-1"
              }
            >
              {props.children || "Unknown bean"}
            </motion.span>
          }
        </AnimatePresence>
      </motion.div>

      {sidebarMode === "maximized" && props.trailing && (
        <div className={"flex items-center justify-center pr-2"}>
          {props.trailing}
        </div>
      )}
    </div>
  );
};

export default SidebarLink;
