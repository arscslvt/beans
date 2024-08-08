"use client";

import React, { HTMLAttributes, useMemo } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";
import IconProps from "@/types/icon.types";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

const sidebarLinkVariants = cva(
  "px-3 py-2.5 text-sm flex justify-start select-none items-center gap-1.5 rounded-md",
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

  return (
    <div
      data-href={href}
      role={href ? "link" : "button"}
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
        "group/sidebar-link flex justify-between items-center relative overflow-clip"
      )}
      onClick={handleClick}
      data-active={isActive}
      {...props}
    >
      <div
        className={
          "flex flex-1 items-center gap-1 overflow-hidden whitespace-nowrap"
        }
      >
        {symbol ? (
          typeof symbol === "string" ? (
            <span>{symbol}</span>
          ) : (
            <span className={"relative z-20"}>
              {React.cloneElement(symbol as React.ReactElement<IconProps>, {
                height: "18",
                width: "18",
              })}
            </span>
          )
        ) : (
          <></>
        )}
        <span
          className={
            "group-hover/default:translate-x-1 transition-transform leading-[14px] py-[3px] text-ellipsis overflow-hidden flex-1"
          }
        >
          {props.children || "Unknown bean"}
        </span>
      </div>

      {props.trailing}
    </div>
  );
};

export default SidebarLink;
