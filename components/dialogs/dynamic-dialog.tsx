"use client";

import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useMediaQuery } from "usehooks-ts";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface DynamicDialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface CustomDynamicDialogProps {
  children: DynamicDialogProps["children"];
}

const DialogContext = React.createContext<Partial<DynamicDialogProps>>(
  {} as DynamicDialogProps
);

const TRIGGER_SIZE = "(min-width: 768px)";

export function DynamicDialog({
  children,
  open,
  onOpenChange,
}: DynamicDialogProps) {
  const [_open, setOpen] = React.useState(open ?? false);
  const isDesktop = useMediaQuery(TRIGGER_SIZE);

  React.useEffect(() => {
    setOpen(open ?? false);
  }, [open]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  if (isDesktop) {
    return (
      <DialogContext.Provider
        value={{
          open: _open,
          onOpenChange: handleOpenChange,
        }}
      >
        <Dialog open={_open} onOpenChange={handleOpenChange}>
          {children}
        </Dialog>
      </DialogContext.Provider>
    );
  }

  return (
    <DialogContext.Provider
      value={{
        open: _open,
        onOpenChange: handleOpenChange,
      }}
    >
      <Drawer open={_open} onOpenChange={handleOpenChange}>
        {children}
      </Drawer>
    </DialogContext.Provider>
  );
}

interface DynamicDialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

const DynamicDialogTrigger = ({
  children,
  asChild,
  className,
  variant,
  size,
  ...props
}: DynamicDialogTriggerProps) => {
  const { onOpenChange } = React.useContext(DialogContext);

  const Slot = asChild ? React.Fragment : "button";

  return (
    <Slot
      onClick={() => onOpenChange?.(true)}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Slot>
  );
};

interface DynamicDialogHeaderProps {
  children: React.ReactNode;
}

const DynamicDialogHeader = ({ children }: DynamicDialogHeaderProps) => {
  const isDesktop = useMediaQuery(TRIGGER_SIZE);

  if (isDesktop) return <DialogHeader>{children}</DialogHeader>;

  return <DrawerHeader>{children}</DrawerHeader>;
};

interface DynamicDialogTitleProps {
  children: React.ReactNode;
}

const DynamicDialogTitle = ({ children }: DynamicDialogTitleProps) => {
  const isDesktop = useMediaQuery(TRIGGER_SIZE);

  if (isDesktop) return <DialogTitle>{children}</DialogTitle>;

  return <DrawerTitle>{children}</DrawerTitle>;
};

interface DynamicDialogDescriptionProps {
  children: React.ReactNode;
}

const DynamicDialogDescription = ({
  children,
}: DynamicDialogDescriptionProps) => {
  const isDesktop = useMediaQuery(TRIGGER_SIZE);

  if (isDesktop) return <DialogDescription>{children}</DialogDescription>;

  return <DrawerDescription>{children}</DrawerDescription>;
};

interface DynamicDialogContentProps {
  children: React.ReactNode;
}

const DynamicDialogContent = ({ children }: DynamicDialogContentProps) => {
  const isDesktop = useMediaQuery(TRIGGER_SIZE);

  if (isDesktop) return <DialogContent>{children}</DialogContent>;

  return <DrawerContent>{children}</DrawerContent>;
};

interface DynamicDialogFooterProps {
  children: React.ReactNode;
}

const DynamicDialogFooter = ({ children }: DynamicDialogFooterProps) => {
  const isDesktop = useMediaQuery(TRIGGER_SIZE);

  if (isDesktop)
    return <div className="flex gap-2 justify-end">{children}</div>;

  return <DrawerFooter>{children}</DrawerFooter>;
};

interface DynamicDialogCloseProps
  extends Omit<DynamicDialogTriggerProps, "children"> {
  children?: React.ReactNode;
}

const DynamicDialogClose = ({
  children,
  asChild,
  className,
  variant,
  size,
  ...props
}: DynamicDialogCloseProps) => {
  const { onOpenChange } = React.useContext(DialogContext);

  return (
    <Button variant="outline" onClick={() => onOpenChange?.(false)} {...props}>
      {children ?? "Close"}
    </Button>
  );
};

export {
  DynamicDialogTrigger,
  DynamicDialogHeader,
  DynamicDialogTitle,
  DynamicDialogDescription,
  DynamicDialogContent,
  DynamicDialogFooter,
  DynamicDialogClose,
};

export const useDynamicDialog = () => React.useContext(DialogContext);
