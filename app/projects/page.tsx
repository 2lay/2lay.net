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
        <main className="pt-8">
            <div className="text-neutral-100 px-5 flex-grow text-lg flex flex-col gap-y-8 mb-5">
                <div>
                    <div className="flex flex-col gap-y-2 mb-5">
                        <p className="text-3xl">
                            <a className="font-bold">$</a> my projects
                        </p>
                        <p>
                            Welcome to my projects page! Here you&#39;ll find a collection of my recent work and
                            personal projects.
                        </p>
                    </div>
                    <div className="flex flex-col max-w-lg">
                        <div className="flex flex-col gap-y-4">
                            <div className="border border-neutral-800 max-w-max p-6 shadow-lg bg-neutral-900 text-white">
                                <a
                                    href="https://tmw.gg/"
                                    className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300 block mb-2">
                                    TMW.gg
                                </a>
                                <p className="text-sm text-gray-400 mb-4">Owner & DevOps | 2022 - now</p>
                                <p className="text-xs text-gray-300 mb-4">
                                    Experience: Spigot Plugin Development, Web Development, Infrastructure Management
                                </p>
                                <div className="text-xs text-gray-500">
                                    <div className="flex gap-2 flex-wrap">
                                        <span className="text-purple-400 bg-purple-800 bg-opacity-30 px-2 py-1 rounded">
                                            Kotlin
                                        </span>
                                        <span className="text-yellow-300 bg-yellow-600 bg-opacity-30 px-2 py-1 rounded">
                                            Java
                                        </span>
                                        <span className="text-blue-300 bg-blue-600 bg-opacity-30 px-2 py-1 rounded">
                                            TypeScript
                                        </span>
                                        <span className="text-gray-300 bg-gray-600 bg-opacity-30 px-2 py-1 rounded">
                                            Next.js
                                        </span>
                                        <span className="text-teal-300 bg-teal-600 bg-opacity-30 px-2 py-1 rounded">
                                            MySQL
                                        </span>
                                        <span className="text-blue-400 bg-blue-800 bg-opacity-30 px-2 py-1 rounded">
                                            Docker
                                        </span>
                                        <span className="text-green-300 bg-green-600 bg-opacity-30 px-2 py-1 rounded">
                                            CI/CD
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-y-2  mb-5">
                        <p className="text-3xl">
                            <a className="font-bold">$</a> my projects
                        </p>
                        <p>
                            Welcome to my projects page! Here you&#39;ll find a collection of my recent work and
                            personal projects.
                        </p>
                    </div>
                    <div className="flex flex-col max-w-lg">
                        <div className="flex flex-col gap-y-4">
                            <div className="border border-neutral-800 max-w-max p-6 shadow-lg bg-neutral-900 text-white">
                                <a
                                    href="https://brawlmc.pl/"
                                    className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300 block mb-2">
                                    BrawlMC.pl
                                </a>
                                <p className="text-sm text-gray-400 mb-4">DevOps | 2024 - now</p>
                                <p className="text-xs text-gray-300 mb-4">
                                    Experience: Spigot & Forge Development, Web Development, Infrastructure Management
                                </p>
                                <div className="text-xs text-gray-500">
                                    <div className="flex gap-2 flex-wrap">
                                        <span className="text-purple-400 bg-purple-800 bg-opacity-30 px-2 py-1 rounded">
                                            Kotlin
                                        </span>
                                        <span className="text-yellow-300 bg-yellow-600 bg-opacity-30 px-2 py-1 rounded">
                                            Java
                                        </span>
                                        <span className="text-blue-300 bg-blue-600 bg-opacity-30 px-2 py-1 rounded">
                                            TypeScript
                                        </span>
                                        <span className="text-gray-300 bg-gray-600 bg-opacity-30 px-2 py-1 rounded">
                                            Next.js
                                        </span>
                                        <span className="text-teal-300 bg-teal-600 bg-opacity-30 px-2 py-1 rounded">
                                            MySQL
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
