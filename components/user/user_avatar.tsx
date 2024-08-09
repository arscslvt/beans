import React, { HTMLAttributes } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AvatarProps } from "@radix-ui/react-avatar";
import { cx } from "class-variance-authority";

interface UserAvatarProps extends AvatarProps {
  src: string;
  alt?: string;
  fallback: {
    className?: HTMLAttributes<HTMLDivElement>["className"];
    display: string;
  };
}

export default function UserAvatar({
  src,
  alt,
  fallback,
  ...props
}: UserAvatarProps) {
  return (
    <Avatar {...props} className={cx("relative", props.className)}>
      <div className="absolute z-10 top-0 left-0 w-full h-full border border-foreground/50 rounded-full mix-blend-overlay" />
      <AvatarImage src={src} alt={alt} className="z-0 relative" />
      <AvatarFallback
        className={cx(
          "bg-accent/10 text-accent border border-accent/30",
          fallback.className
        )}
      >
        {fallback.display}
      </AvatarFallback>
    </Avatar>
  );
}
