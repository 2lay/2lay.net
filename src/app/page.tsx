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
    <main className="load text-white min-h-screen w-screen flex justify-center">

      <div className="max-w-2xl w-full">


        <Card>
          <div className="flex flex-row gap-2 items-center mb-2 ">
            <img src="https://github.com/2lay.png" alt="2lay" width={50} height={50} className="border-violet-500 bg-violet-500/20 border-1 rounded-sm" />
            <h2 className="text-2xl font-semibold typing-text">hi i'm <Highlight>2lay</Highlight></h2>
          </div>
          <div className="flex flex-col">
            <p className="mb-1">
              i'm a <Highlight>{year} year old</Highlight> <Highlight>polish</Highlight> student at <Highlight>blekinge institute of technology</Highlight> in <Highlight>sweden</Highlight>. i speak <Highlight>fluent polish</Highlight>, <Highlight>swedish</Highlight> and <Highlight>english</Highlight> <span className="italic">(finished <Highlight>c1/cae level english</Highlight> in school)</span>.
            </p>
            <p className="mb-1">
              i'm mainly interested in <Highlight>web development</Highlight> and a silly voxel game called <Highlight>minecraft</Highlight>.
            </p>
            <p>
              my interests outside of programming are <span className="text-violet-500 font-semibold">music</span> and <span className="text-violet-500 font-semibold">gaming</span>.
            </p>
          </div>
        </Card>

        <Card>
          <div className="mb-2">
            <h2 className="text-2xl font-semibold text-violet-500">links</h2>
            <p>
              i'm active all over the place, but you can find me here:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Link href="https://github.com/2lay" target="_blank">
              <button className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center">
                      <span className="text-violet-400 text-sm font-bold">gh</span>
                    </div>
                    <div className="text-left">
                      <span className="text-white/90 font-medium">github</span>
                      <span className="text-white/50 text-sm ml-2">2lay</span>
                    </div>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="https://last.fm/user/iwas15with100k" target="_blank">
              <button className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center">
                      <span className="text-violet-400 text-sm font-bold">fm</span>
                    </div>
                    <div className="text-left">
                      <span className="text-white/90 font-medium">last.fm</span>
                      <span className="text-white/50 text-sm ml-2">iwas15with100k</span>
                    </div>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="https://www.youtube.com/@2lay" target="_blank">
              <button className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center">
                      <span className="text-violet-400 text-sm font-bold">yt</span>
                    </div>
                    <div className="text-left">
                      <span className="text-white/90 font-medium">youtube</span>
                      <span className="text-white/50 text-sm ml-2">2lay</span>
                    </div>
                  </div>
                </div>
              </button>
            </Link>
            <Link href="http://discordapp.com/users/356867455303548929" target="_blank">
            <button className="cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center">
                    <span className="text-violet-400 text-sm font-bold">dc</span>
                  </div>
                  <div className="text-left">
                    <span className="text-white/90 font-medium">discord</span>
                    <span className="text-white/50 text-sm ml-2">2lay</span>
                  </div>
                </div>
              </div>
            </button>
          </Link>
          </div>
        </Card>
        <Lastfm />

        <Card>
            <h2 className="text-2xl font-semibold text-violet-500">friends & badges</h2>
            <p className="mb-2">some badges and links to cool people, check them out!</p>
            <div className="pixel flex flex-col gap-1">
              <div className="flex flex-wrap gap-2">
                <a href="https://2lay.net/8831.png">
                  <img src="/8831.png" alt="github" width="88" height="31" />
                </a>
                <a href="https://miaow.ing">
                  <img src="https://miaow.ing/images/88x31_miaowing.png" alt="miaowing" width="88" height="31" />
                </a>
                <a href="https://anna.oa.ke">
                  <img src="https://anna.oa.ke/assets/88x31.gif" alt="anna.oa.ke" width="88" height="31" />
                </a>
                <a href="https://vea.st">
                  <img src="https://vea.st/button.png" alt="vea.st" width="88" height="31" />
                </a>
                <a href="https://imeesa.com">
                  <img src="https://imeesa.com/88x31/me.png" alt="imeesa" width="88" height="31" />
                </a>
                <a href="https://sapphic.moe">
                  <img src="https://sapphic.moe/buttons/sapphic.png" alt="sapphic.moe" width="88" height="31" />
                </a>
                <a>
                  <img src="https://utfs.io/f/0nYClWA9oiIm4BmNmw90vTL2nk0aNJXQUA8lzOh63cMmIFH7" alt="miaow.ing" width="88" height="31" />
                </a>
                <a>
                  <img src="https://utfs.io/f/0nYClWA9oiImw3Dtk9j8dUwm7QrzLqoZWaBDS3kVsvRCxl0I" alt="badge" width="88" height="31" />
                </a>
                <a>
                  <img src="https://utfs.io/f/0nYClWA9oiImlL128zc9FYjNg7EMuOpWqBmyVvKfDIirCR0t" alt="badge" width="88" height="31" />
                </a>
                <a>
                  <img src="https://utfs.io/f/0nYClWA9oiImW48VBigrCBaJGy1hmXFT0Z8Kw2xobj3E5IRz" alt="badge" width="88" height="31" />
                </a>
              </div>
            </div>
        </Card>
        <Footer />

      </div>


    </main>
  )
}
