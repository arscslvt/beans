import Sidebar from '@/components/sidebar/sidebar'
import React from 'react'
import {SignedIn, SignedOut} from "@clerk/nextjs";
import AuthPage from "@/app/auth/page";

export default function MainLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <SignedIn>
                <div className='flex'>
                    <Sidebar/>
                    <main className='flex-1 flex flex-col'>
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
