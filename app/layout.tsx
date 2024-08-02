import { Inter } from "next/font/google";
import "./styles.css";
import Navbar from "./navbar";
import type { Viewport } from 'next'

const font = Inter({ subsets: ["cyrillic"] });

export const viewport: Viewport = {
    themeColor: '#f5a9b8',
  }


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

            <body className={`${font.className} bg-neutral-950 max-w-screen-lg mx-auto mt-12`}>
                <div className="text-neutral-100 px-5 flex-grow text-lg">
                    <div className="flex flex-col gap-y-6">
                        <div>
                            <div className="flex justify-between">
                                <p className="text-5xl">
                                    hey, i'm <a className="text-ash_primary-500 font-bold">ashley</a>
                                    <a className="text-neutral-600 text-2xl italic"> (she/her)</a>
                                </p>
                                <Navbar />
                            </div>
                            <p className="pt-2">welcome to my corner of the internet!</p>
                        </div>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}
