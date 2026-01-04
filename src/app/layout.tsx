import type { Metadata } from "next"
import { Providers } from "./components/providers"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "2lay.net",
  description: "my personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  themeColor: "#8E51FF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0F0D14] overflow-x-hidden ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
