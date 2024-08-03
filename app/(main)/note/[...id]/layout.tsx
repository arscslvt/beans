import React from 'react';

export default async function Layout({children, sources}: { children: React.ReactNode, sources: React.ReactNode }) {
    return (
        <div className={"flex"}>
            <div className={"flex-1"}>
                {children}
            </div>
            {sources}
        </div>
    );
}