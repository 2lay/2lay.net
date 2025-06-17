import type { Metadata } from "next"
import { Providers } from "./components/providers"
import { JetBrains_Mono } from "next/font/google"

import "./globals.css"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "2lay.net",
  description: "my personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  themeColor: "#CE97A6",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-black overflow-x-hidden ${jetBrainsMono.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
