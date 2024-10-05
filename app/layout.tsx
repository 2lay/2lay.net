import { Inter, JetBrains_Mono } from "next/font/google";
import "./styles.css";
import type { Viewport } from "next";
import Nav from "./components/Navigation";

const font = JetBrains_Mono({ subsets: ["cyrillic"] });

export const viewport: Viewport = {
    themeColor: "#f5a9b8",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="https://github.com/2lay.png" sizes="any" />
            </head>

            <body className={`${font.className} bg-[#111111] min-h-screen relative max-w-screen-lg mx-auto mt-8 text-lg`}>
                {/* Noise background, credits to https://arc.net/ */}
                <div className="fixed inset-0 bg-[url('/noise.png')] bg-repeat opacity-30 pointer-events-none z-[-1]"></div>

                {/* Navbar */}
                <div className="flex justify-between items-center bg-neutral-950 rounded-t-lg px-3 py-2 mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                    <div className="text-pink-300 hidden md:block">
                        <a>&gt; 2lay.net</a>
                    </div>
                    <Nav />
                </div>

                {/* Main Content */}
                <div className="bg-[#0f0f0f] text-neutral-200 px-3 mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 py-4">
                    <div className="py-[0.01px]">{children}</div>
                </div>

                {/* Footer */}
                <div className="bg-neutral-950 rounded-b-lg px-3 py-2 mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                    <a className="text-neutral-500">2lay.net © 2024</a>
                </div>
            </body>
        </html>
    );
}
