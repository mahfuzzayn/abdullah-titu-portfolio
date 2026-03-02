import type { Metadata } from "next";
import { Anton, Roboto_Flex } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "../components/Preloader";
import StickyEmail from "./_components/StickyEmail";
import { Toaster } from "@/components/ui/sonner";

const antonFont = Anton({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
    variable: "--font-anton",
});

const robotoFlex = Roboto_Flex({
    weight: ["100", "400", "500", "600", "700", "800"],
    style: "normal",
    subsets: ["latin"],
    variable: "--font-roboto-flex",
});

export const metadata: Metadata = {
    title: "Abdullah Titu - Portfolio",
    description: "Personal portfolio of Abdullah Titu",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased dark`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    {/* <Link
                        href="#form_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </Link> */}
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                    <Toaster />
                </ReactLenis>
            </body>
        </html>
    );
}
