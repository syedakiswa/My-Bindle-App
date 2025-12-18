
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

import { PageLoader } from "../components/PageLoader";

export const metadata: Metadata = {
  title: "MyBindle – Stay Connected, Stay Social",
  description:
    "MyBindle is a modern social platform where friendships grow and communities connect.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>


          <PageLoader />
          <Navbar />
          {children}
   
      </body>
    </html>
  );
}
