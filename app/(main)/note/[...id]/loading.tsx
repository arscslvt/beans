import React from 'react';
import Loader2 from "@/components/icons/loader-2";

export default function LoadingNote() {
    return (
        <div className={"py-6 px-6"}>
            <div className={"flex gap-1 items-center text-sm"}>
                <span className={"animate-spin"}><Loader2 width={"1.2em"} height={"1.2em"} fill={"hsl(var(--accent))"} /></span>
                <span className={"text-muted-foreground"}>
                    Retrieving note...
                </span>
            </div>

        </div>
    );
}
