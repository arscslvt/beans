import React from 'react';
import Loader2 from "@/components/icons/loader-2";

export default function LoadingSources() {
    return (
        <div className={"py-6 px-6 min-w-52 max-w-52"}>
            <div className={"flex gap-1 items-center text-sm"}>
                <span className={"animate-spin"}><Loader2 width={"1em"} height={"1em"} fill={"hsl(var(--accent))"} /></span>
                <span className={"text-muted-foreground"}>
                    Checking versions...
                </span>
            </div>

        </div>
    );
}
