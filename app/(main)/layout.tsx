import Sidebar from "@/components/sidebar/sidebar";
import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import AuthPage from "@/app/auth/page";
import { isMobileDevice } from "@/utils/device";
import Menubar from "@/components/menubar/menubar";
import BeansLogo from "@/components/sidebar/beans-logo";
import SidebarNotes from "@/components/sidebar/partial/sidebar-notes";
import SidebarSharedNotes from "@/components/sidebar/partial/sidebar-shared-notes";
import { SidebarLoadingWrapper } from "@/components/sidebar/sidebar-group";
import MenubarTop from "@/components/menubar/menubar-top";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = isMobileDevice();

  return (
    <>
      <SignedIn>
        <div className="flex h-dvh max-h-dvh overflow-y-auto sm:overflow-auto bg-muted/30 sm:bg-background">
          {isMobile ? (
            <Menubar />
          ) : (
            <Sidebar>
              <SidebarLoadingWrapper>
                <SidebarSharedNotes />
              </SidebarLoadingWrapper>

              <SidebarLoadingWrapper>
                <SidebarNotes />
              </SidebarLoadingWrapper>
            </Sidebar>
          )}
          <div className="flex-1 flex flex-col sm:flex-row p-0 sm:p-2 sm:pl-0">
            {isMobile && <MenubarTop />}
            <main className="flex-1 flex flex-col rounded-3xl rounded-b-none sm:rounded-md border border-b-0 sm:border shadow-lg overflow-clip bg-background">
              {children}
            </main>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <AuthPage />
      </SignedOut>
    </>
  );
}
