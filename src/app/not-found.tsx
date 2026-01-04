import Card from "./components/card"
import Link from "next/link"
import Footer from "./components/footer";
import Lastfm from "./components/lastfm"
import type { Metadata } from "next"

const year = Math.floor((Date.now() - 1162847400000) / 1000 / 60 / 60 / 24 / 365);

export const metadata: Metadata = {
  title: "2lay.net - home",
  description: "my personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}
function Highlight(props: { children: React.ReactNode }) {
  return <span className="text-violet-500 font-semibold">{props.children}</span>
}
export default async function Home() {


  return (
    <main className="bg-[#0f0d14] text-white min-h-screen w-screen flex justify-center">

      <div className="max-w-2xl w-full">



        <Card>
          <div className="mb-2">
            <h2 className="text-2xl font-semibold text-violet-500">404</h2>
            <p className="text-white/80">
              this page doesn't exist
            </p>
          </div>
          <div className="flex flex-col">
            <Link href="/" className="text-violet-500 hover:text-violet-400 transition-colors duration-200">
              <span className="font-medium">go back home</span>
            </Link>
          </div>
        </Card>

        <Footer />

      </div>


    </main>
  )
}
