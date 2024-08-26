"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { MOBILE_MAX_WIDTH } from "../screen-query";
import { useMediaQuery } from "usehooks-ts";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH}px)`);

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group z-[9999]"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-accent/20 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          icon: "group-[.toast]:text-accent",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      position={isMobile ? "top-center" : props.position}
      {...props}
    />
  );
};

export { Toaster };
