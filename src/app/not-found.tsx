import Card from "./components/card"
import Link from "next/link"
import Footer from "./components/footer";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - 2lay.net",
  description: "page not found",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default async function NotFound() {
  return (
    <main className="text-white min-h-screen w-screen flex justify-center items-center">

      <div className="max-w-lg w-full px-4 load">

        <Card className="border-violet-500/20">
          <div className="text-4xl font-bold text-violet-500 text-center">404</div>
          <div className="text-center space-y-4">
            <h1 className="text-xl font-medium text-white/90">
              this page seems to be missing
            </h1>
            
            <p className="text-white/60 text-sm">
              the page you're looking for might have been removed, 
              had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex gap-3 justify-center pt-2">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm bg-violet-500 hover:bg-violet-600 text-white rounded transition-colors"
              >
                home
              </Link>
            </div>
          </div>
        </Card>

        <Footer />

      </div>

    </main>
  )
}
