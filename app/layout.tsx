import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/Components/layout/Layout";
import { LoginModal } from "@/Components/modals/LoginModal";
import { RegisterModal } from "@/Components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/Components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chirping Social App",
  description: "A social media app for chirping social birds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <Layout>
            <Toaster position="top-right" />
            <LoginModal />
            <RegisterModal />
            {children}
          </Layout>
        </SessionWrapper>
      </body>
    </html>
  );
}
