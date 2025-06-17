import Card from "./components/card"
import Link from "next/link"
import Navbar from "./components/navbar";
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
  return <span className="text-pink-500 font-semibold">{props.children}</span>
}
export default async function Home() {


  return (
    <main className="bg-black text-white min-h-screen w-screen flex">

      <div className="max-w-3xl w-full">
        <Navbar />

        <Card>
          <div className="flex flex-row gap-2 items-center mb-2">
            <img src="https://github.com/2lay.png" alt="Ella" width={50} height={50} className="border-pink-500 bg-pink-500/20 border-1" />
            <h2 className="text-2xl font-semibold">hi i'm <Highlight>ella</Highlight></h2>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              i'm a <Highlight>{year} year old</Highlight> <Highlight>polish</Highlight> software engineering student at <Highlight>blekinge institute of technology</Highlight> in <Highlight>sweden</Highlight>. i speak <Highlight>fluent polish</Highlight>, <Highlight>swedish</Highlight> and <Highlight>english</Highlight> <span className="italic">(finished <Highlight>c1/cae level english</Highlight> in school)</span>.
            </p>
            <p>
              i'm mainly interested in <Highlight>web development</Highlight> and a silly voxel game called <Highlight>minecraft</Highlight>.
            </p>
            <p>
              my interests outside of programming are <span className="text-pink-500 font-semibold">music</span> and <span className="text-pink-500 font-semibold">gaming</span>. my favourite game is <span className="text-pink-500 font-semibold">modded minecraft</span>, i have been running a modded minecraft server network for a few years called <Link href="https://tmw.gg" className="text-pink-500 hover:text-pink-500/80 underline decoration-pink-500 underline-offset-4 font-semibold">tmw.gg</Link>. on the other hand my favourite artist is <Link href="https://youtu.be/JLfS_swCBbQ" className="text-pink-500 hover:text-pink-500/80 underline decoration-pink-500 underline-offset-4 font-semibold">glaive</Link>.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold mb-2 text-pink-500"># find-me</h2>
          <p className="mb-2">
            i'm active all over the place, but you can find me here:
          </p>
          <div className="flex flex-col gap-1">
            <Link href="https://github.com/2lay" className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">github</span> <span className="text-white/50 group-hover:text-white/40">/2lay</span></p>
            </Link>
            <Link href="https://x.com/2lay" className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">twitter</span> <span className="text-white/50 group-hover:text-white/40">/twolays</span></p>
            </Link>
            <Link href="https://last.fm/user/iwas15with100k" className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">last.fm</span> <span className="text-white/50 group-hover:text-white/40">/iwas15with100k</span></p>
            </Link>
            <Link href="https://t.me/twolay" className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">telegram</span> <span className="text-white/50 group-hover:text-white/40">/twolay</span></p>
            </Link>
            <Link href="https://www.youtube.com/@2lay" className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">youtube</span> <span className="text-white/50 group-hover:text-white/40">/@2lay</span></p>
            </Link>
            <a className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">discord</span> <span className="text-white/50 group-hover:text-white/40">@2lay</span></p>
            </a>
            <a className="text-pink-500 hover:text-pink-500/80 font-semibold group">
              <p>{'> '} <span className="text-white group-hover:text-white/80">mail</span> <span className="text-white/50 group-hover:text-white/40">ella<span className="text-xs text-white/30 mx-1">at</span>2lay<span className="text-xs text-white/30 mx-1">dot</span>net</span></p>
            </a>
          </div>
        </Card>
        <Lastfm />

        <Card>
          <h2 className="text-2xl font-semibold mb-2 text-pink-500"># friends-and-badges</h2>
          <p className="mb-4">
            some badges and links to cool people, check them out!
          </p>
          <div className="pixel flex flex-col gap-1">
            <div className="flex flex-wrap gap-2">
              <a href="https://2lay.net/8831.png">
                <img src="https://2lay.net/8831.png" alt="github" width={88} height={31} />
              </a>
              <a href="https://miaow.ing">
                <img src="https://miaow.ing/images/88x31_miaowing.png" alt="miaowing" width={88} height={31} />
              </a>
              <a href="https://anna.oa.ke">
                <img src="https://anna.oa.ke/assets/88x31.gif" alt="anna.oa.ke" width={88} height={31} />
              </a>
              <a href="https://vea.st">
                <img src="https://vea.st/button.png" alt="vea.st" width={88} height={31} />
              </a>
              <a href="https://imeesa.com">
                <img src="https://imeesa.com/88x31/me.png" alt="imeesa" width={88} height={31} />
              </a>
              <a>
                <img src="https://utfs.io/f/0nYClWA9oiIm4BmNmw90vTL2nk0aNJXQUA8lzOh63cMmIFH7" alt="miaow.ing" width={88} height={31} />
              </a>
              <a>
                <img src="https://utfs.io/f/0nYClWA9oiImw3Dtk9j8dUwm7QrzLqoZWaBDS3kVsvRCxl0I" alt="badge" width={88} height={31} />
              </a>
              <a>
                <img src="https://utfs.io/f/0nYClWA9oiImlL128zc9FYjNg7EMuOpWqBmyVvKfDIirCR0t" alt="badge" width={88} height={31} />
              </a>
              <a>
                <img src="https://utfs.io/f/0nYClWA9oiImW48VBigrCBaJGy1hmXFT0Z8Kw2xobj3E5IRz" alt="badge" width={88} height={31} />
              </a>
              

            </div>
          </div>


        </Card>
        <Footer />

      </div>


    </main>
  )
}
