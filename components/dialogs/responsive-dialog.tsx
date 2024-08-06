"use client";

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {useMediaQuery} from "usehooks-ts";


interface ResponsiveDialogProps {
    children: React.ReactNode;
    asChild?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: string;
    description?: string;
    content: React.ReactNode;
    footer?: React.ReactNode;
}

export interface CustomResponsiveDialogProps {
    children: ResponsiveDialogProps["children"];
}

const DialogContext = React.createContext<Partial<ResponsiveDialogProps>>({} as ResponsiveDialogProps);


export function ResponsiveDialog({children, title, description, asChild, open, onOpenChange, content, footer}: ResponsiveDialogProps) {
    const [_open, setOpen] = React.useState(open ?? false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    const handleOpenChange = (open: boolean) => {
        setOpen(open);
        onOpenChange?.(open);
    }

    if (isDesktop) {
        return (
            <DialogContext.Provider value = {{title, description, open: _open, onOpenChange: handleOpenChange}}>
                <Dialog open={_open} onOpenChange={handleOpenChange}>
                    <DialogTrigger asChild={asChild}>
                        {children}
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        {title || description ? <DialogHeader>
                            {title && <DialogTitle>{title}</DialogTitle>}
                            {description && <DialogDescription>
                                {description}
                            </DialogDescription>}
                        </DialogHeader> : null}
                        {content}
                    </DialogContent>
                </Dialog>
            </DialogContext.Provider>
        )
    }

    return (
        <DialogContext.Provider value = {{title, description, open: _open, onOpenChange: handleOpenChange}}>
            <Drawer open={_open} onOpenChange={handleOpenChange}>
                <DrawerTrigger asChild={asChild}>
                    {children}
                </DrawerTrigger>
                <DrawerContent>
                    {title || description && <DrawerHeader className={"text-left"}>
                        {title && <DrawerTitle>{title}</DrawerTitle>}
                        {description &&
                            <DrawerDescription>
                            {description}
                            </DrawerDescription>}
                        </DrawerHeader> }
                    {content}
                    {footer ?? <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>}
                </DrawerContent>
            </Drawer>
        </DialogContext.Provider>
    )
}

export const useResponsiveDialog = () => React.useContext(DialogContext);