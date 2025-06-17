import Card from "./components/card"
import Link from "next/link"
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const year = Math.floor((Date.now() - 1162847400000) / 1000 / 60 / 60 / 24 / 365);

function Highlight(props: { children: React.ReactNode }) {
  return <span className="text-pink-500 font-semibold">{props.children}</span>
}

export default async function Home() {
  return (
    <main className="bg-black text-white min-h-screen w-screen flex">

      <div className="max-w-3xl w-full">
        <Navbar />

        <Card>
          <h2 className="text-2xl font-semibold mb-2 text-pink-500"># not-found</h2>
          <p className="mb-2">
            this page doesn't exist, sorry!
          </p>

          <div className="flex flex-col gap-1">
            <Link href="/" className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">go home</span></p>
            </Link>


          </div>
        </Card>

        <Footer />

      </div>


    </main>
  )
}
