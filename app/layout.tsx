import { Inter, JetBrains_Mono } from "next/font/google";
import "./styles.css";
import type { Viewport } from "next";
import Navigation from "./components/navigation";

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

            <body className={`${font.className} bg-neutral-900 max-w-screen-2xl mx-auto mt-8 sm:mt-12 text-base md:text-lg`}>
                {/* Navbar */}
                <div className="flex justify-between items-center bg-neutral-950 rounded-t-lg px-3 py-2 sm:py-1 mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                    <div className="text-pink-300 hidden md:block">
                        <a>&gt; 2lay.net</a>
                    </div>
                        <Navigation />
                </div>

                {/* Main Content */}
                <div className="bg-[#0f0f0f] text-neutral-200 px-3 py-3 sm:py-2 mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                    <div className="px-2">{children}</div>
                </div>

                {/* Footer */}
                <div className="bg-neutral-950 rounded-b-lg px-3 py-4 sm:py-2 mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                    <a className="text-neutral-500">2lay.net © 2024</a>
                </div>
            </body>
        </html>
    );
}
