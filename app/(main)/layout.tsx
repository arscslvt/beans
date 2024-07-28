import Sidebar from '@/components/sidebar'
import React from 'react'

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex'>
        <Sidebar />
        <main className='flex-1'>
            {children}
        </main>
    </div>
  )
}
