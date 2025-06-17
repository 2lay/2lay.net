import Card from "../components/card"
import Link from "next/link"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Metadata } from "next";

const year = Math.floor((Date.now() - 1162847400000) / 1000 / 60 / 60 / 24 / 365);

function Highlight(props: { children: React.ReactNode, color?: string }) {
    return <span className={`text-${props.color || 'pink'}-300 font-semibold`}>{props.children}</span>
}

export const metadata: Metadata = {
    title: "2lay.net - projects",
    description: "my projects",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  }

export default async function Home() {
    return (
        <main className="bg-black text-white min-h-screen w-screen flex">

            <div className="max-w-3xl w-full">
                <Navbar />

                <Card color="F4AA4D">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center mb-2">
                            <img src="https://github.com/tmwdotgg.png" alt="TMW.gg" width={50} height={50} className="border-[#F4AA4D] bg-[#F4AA4D]/20 border-1" />
                            <h2 className="text-2xl font-semibold text-[#ffc680]">TMW.gg</h2>
                        </div>

                        <div className="flex flex-col gap-1 text-sm">
                            <p className="text-white/80">
                                <span className="text-[#F4AA4D]">{'>'}</span> description: <span className="text-white">modded minecraft server network</span>
                            </p>
                            <p className="text-white/80">
                                <span className="text-[#F4AA4D]">{'>'}</span> status: <span className="text-green-400">running</span>
                            </p>
                            <p className="text-white/80">
                                <span className="text-[#F4AA4D]">{'>'}</span> uptime: <span className="text-white">~3 years</span>
                            </p>
                        </div>

                        <div className="mt-2">
                            <p className="text-white/60 text-sm mb-1">stack:</p>
                            <div className="flex flex-wrap gap-1 text-xs">
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">typescript</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">next.js</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">tailwind</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">clerk</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">pterodactyl</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">docker</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">postgres</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">linux</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">bash</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">nginx</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">java</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">kotlin</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">forge</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">fabric</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">neoforge</span>
                                <span className="bg-[#F4AA4D]/20 text-[#F4AA4D] px-2 py-1 border-[#F4AA4D]/20 border-1">velocity</span>
                            </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#F4AA4D]/20">
                            <Link href="https://tmw.gg" className="text-[#F4AA4D] hover:text-[#F4AA4D]/80 font-semibold group text-sm">
                                <span className="text-[#F4AA4D]">$</span> <span className="text-white group-hover:text-white/80">curl</span> <span className="text-[#F4AA4D] group-hover:text-[#F4AA4D]/80">tmw.gg</span>
                            </Link>
                        </div>
                    </div>
                </Card>

                {/*
                <Card color="00D492">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center mb-2">
                            <img src="https://github.com/fileslip.png" alt="FileSlip" width={50} height={50} className="border-[#00D492] bg-green-300/20 border-1" />
                            <h2 className="text-2xl font-semibold"><Highlight color="green">FileSlip</Highlight></h2>
                        </div>

                        <div className="flex flex-col gap-1 text-sm">
                            <p className="text-white/80">
                                <span className="text-green-300">{'>'}</span> description: <span className="text-white">file sharing service</span>
                            </p>
                            <p className="text-white/80">
                                <span className="text-green-300">{'>'}</span> status: <span className="text-green-400">running</span>
                            </p>
                            <p className="text-white/80">
                                <span className="text-green-300">{'>'}</span> uptime: <span className="text-white">{'<'}1 year</span>
                            </p>
                        </div>

                        <div className="mt-2">
                            <p className="text-white/60 text-sm mb-1">stack:</p>
                            <div className="flex flex-wrap gap-1 text-xs">
                                <span className="bg-green-300/20 text-green-300 px-2 py-1 border-green-300/20 border-1">typescript</span>
                                <span className="bg-green-300/20 text-green-300 px-2 py-1 border-green-300/20 border-1">next.js</span>
                                <span className="bg-green-300/20 text-green-300 px-2 py-1 border-green-300/20 border-1">tailwind</span>
                                <span className="bg-green-300/20 text-green-300 px-2 py-1 border-green-300/20 border-1">trpc</span>
                                <span className="bg-green-300/20 text-green-300 px-2 py-1 border-green-300/20 border-1">drizzle</span>
                                <span className="bg-green-300/20 text-green-300 px-2 py-1 border-green-300/20 border-1">postgres</span>
                                <span className="bg-green-300/20 text-green-300 px-2 py-1 border-green-300/20 border-1">s3</span>
                            </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-green-300/20">
                            <Link href="https://fileslip.com" className="text-green-300 hover:text-green-300/80 font-semibold group text-sm">
                                <span className="text-green-300">$</span> <span className="text-white group-hover:text-white/80">curl</span> <span className="text-green-300 group-hover:text-green-300/80">fileslip.com</span>
                            </Link>
                        </div>
                    </div>
                </Card>
                */}
                <Card>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center mb-2">
                            <div className="w-[50px] h-[50px] border-pink-500 bg-pink-500/20 border-1 flex items-center justify-center">
                                <span className="text-pink-500 text-xl">?</span>
                            </div>
                            <h2 className="text-2xl font-semibold"><Highlight>more projects</Highlight></h2>
                        </div>

                        <div className="flex flex-col gap-1 text-sm">
                            <p className="text-white/80">
                                <span className="text-pink-500">{'>'}</span> status: <span className="text-yellow-400">in development</span>
                            </p>
                            <p className="text-white/80">
                                <span className="text-pink-500">{'>'}</span> note: <span className="text-white">working on more cool stuff</span>
                            </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-pink-500/20">
                            <p className="text-pink-500 font-semibold text-sm">
                                <span className="text-pink-500">$</span> <span className="text-white">echo</span> <span className="text-pink-500">"stay tuned!"</span>
                            </p>
                        </div>
                    </div>
                </Card>


                <Footer />

            </div>


        </main>
    )
}
