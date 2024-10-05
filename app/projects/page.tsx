import { Metadata } from "next";

export const metadata: Metadata = {
    title: "2lay.net - projects",
    description: "here are the projects i work on",
    twitter: {
        card: "summary_large_image",
        title: "2lay.net - projects",
        description: "here are the projects i work on",
        images: ["https://github.com/2lay.png"],
    },
};

export default function Projects() {
    return (
        <main className="text-neutral-100 px-5 flex-grow text-lg flex flex-col gap-y-8">
            <div>
                <div className="flex flex-col gap-y-2 mb-5">
                    <p className="text-3xl">
                        <span className="font-bold">$</span> my projects
                    </p>
                    <p>
                        welcome to my projects page! here you&#39;ll find a collection of my recent work and
                        personal projects.
                    </p>
                </div>
                <div className="flex flex-col max-w-lg">
                    <div className="border border-neutral-800 p-6 bg-neutral-900 text-white rounded-lg transition-all duration-300 ease-in-out hover:shadow-[5px_5px_0px_0px_#f472b6]">
                        <a
                            href="https://tmw.gg/"
                            className="text-2xl font-bold hover:text-pink-300 transition-colors duration-300 block mb-2">
                            TMW.gg
                        </a>
                        <p className="text-sm text-neutral-400 mb-4">Founder & DevOps | 2022 - now</p>
                        <p className="text-sm text-neutral-300 mb-4">
                            Experience: Paper Plugin Development, NMS, Web Development, Mixins, Infrastructure Management
                        </p>
                        <div className="text-xs">
                            <div className="flex gap-2 flex-wrap">
                                <span className="bg-neutral-800 px-2 py-1 rounded text-pink-300">Kotlin</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded text-yellow-300">Java</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded text-blue-300">TypeScript</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded text-neutral-300">Next.js</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded text-teal-300">MySQL</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded text-blue-400">Docker</span>
                                <span className="bg-neutral-800 px-2 py-1 rounded text-green-300">CI/CD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}