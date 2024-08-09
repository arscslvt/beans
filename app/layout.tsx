import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { isMobileDevice } from "@/utils/device";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Beans",
    default: "Beans",
  },

  description: "Note taking with superpowers. I'm pretty sure you'll love it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster closeButton={!isMobileDevice()} />
        </body>
      </html>
    </ClerkProvider>
  );
}
