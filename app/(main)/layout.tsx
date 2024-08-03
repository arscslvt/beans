import Sidebar from '@/components/sidebar/sidebar'
import React from 'react'
import {SignedIn, SignedOut} from "@clerk/nextjs";
import AuthPage from "@/app/auth/page";
import {isMobileDevice} from "@/utils/device";
import Menubar from "@/components/menubar/menubar";
import BeansLogo from "@/components/sidebar/beans-logo";

export default function MainLayout({children}: { children: React.ReactNode }) {
    const isMobile = isMobileDevice();

    return (
        <>
            <SignedIn>
                <div className='flex h-dvh max-h-dvh overflow-y-auto'>
                    {isMobile ? <Menubar /> : <Sidebar/>}
                    <main className='flex-1 flex flex-col'>
                        {isMobile && <div className={"flex items-center justify-center gap-2 pt-4 px-4 select-none"}>
                            <BeansLogo />
                        </div>}
                        {children}
                    </main>
                </div>
            </SignedIn>

            <SignedOut>
                <AuthPage/>
            </SignedOut>
        </>
    )
}
