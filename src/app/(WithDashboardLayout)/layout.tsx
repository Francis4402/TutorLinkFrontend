import type { Metadata } from "next";
import "../globals.css";

import { Toaster } from "@/components/ui/sonner";
import Providers from "@/providers/Providers";


export const metadata: Metadata = {
  title: "TutorLink-Dashboard",
  description: "a platform where students can discover tutors, book sessions, and manage their learning journey",
};

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>
        <Toaster position="top-right"/>
        {children}
      </Providers>
    </>
  );
}
