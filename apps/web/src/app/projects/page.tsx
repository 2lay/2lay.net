import { Metadata } from "next";

export const metadata: Metadata = {
    title: "2lay.net - projects",
    description: "here are the projects i work on",
};

export default function Projects() {
    return (
        <main className="pt-8">
            <div className="text-neutral-100 px-5 flex-grow text-lg">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-2  mb-5">
                            <p className="text-3xl">
                                <a className="font-bold">$</a> project
                            </p>
                            <p>
                                Welcome to my projects page! Here you'll find a collection of my recent work and
                                personal projects.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="border border-neutral-600 bg-neutral-900 max-w-2xl p-8 rounded-xl shadow-2xl">
                                <a
                                    href="https://tmw.gg/"
                                    className="text-3xl font-semibold text-neutral-100 hover:text-neutral-300 transition-colors duration-300 block mb-4">
                                    TMW.gg
                                </a>
                                <p className="text-base text-neutral-400 mb-5">
                                    Next-gen modded Minecraft network delivering an unforgettable player experience with
                                    seamless integration across our CMS, Discord, and game servers. Each server runs on
                                    custom-developed software with a coding API for streamlined development and
                                    deployment.
                                </p>
                                <div className="text-sm text-neutral-500">
                                    <div className="max-h-28 overflow-y-auto flex flex-wrap gap-2">
                                        <span className="text-[#eb92fd] bg-[#eb92fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                            Kotlin
                                        </span>
                                        <span className="text-[#fdc492] bg-[#fdc492] bg-opacity-20 px-3 py-1 rounded-lg">
                                            Java
                                        </span>
                                        <span className="text-[#92adfd] bg-[#92adfd] bg-opacity-20 px-3 py-1 rounded-lg">
                                            TypeScript
                                        </span>
                                        <span className="text-[#dfdfdf] bg-[#bfbfbf] bg-opacity-20 px-3 py-1 rounded-lg">
                                            Next.js
                                        </span>
                                        <span className="text-[#9296fd] bg-[#9296fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                            Docker
                                        </span>
                                        <span className="text-[#fdfb92] bg-[#fdfb92] bg-opacity-20 px-3 py-1 rounded-lg">
                                            Linux
                                        </span>
                                        <span className="text-[#92dbfd] bg-[#92dbfd] bg-opacity-20 px-3 py-1 rounded-lg">
                                            SQL
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
