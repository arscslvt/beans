import React from 'react';
import {isMobileDevice} from "@/utils/device";

export default async function Layout({children, sources}: { children: React.ReactNode, sources: React.ReactNode }) {

    const isMobile = isMobileDevice();

    return (
        <div className={"flex"}>
            <div className={"flex-1"}>
                {children}
            </div>
            {!isMobile && sources}
        </div>
    );
}