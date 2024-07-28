import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader
 from "nextjs-toploader";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin BenjiCars",
  description: "Course rental cars by MiguelDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
      <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <NextTopLoader color="#000"/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
