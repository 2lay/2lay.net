import Image from "next/image";

export default function Home() {
    return (
        <main className="pt-8">
            {/* nav */}

            {/* content */}
            <div className="text-neutral-100 px-5 flex-grow text-lg">
                <div className="flex flex-col gap-y-5">
                    <div>
                        <p className="text-5xl">
                            hey, i'm <a className="text-ash_primary-500 font-bold">ashley</a>
                            <span className="text-neutral-600 text-2xl italic"> (she/her)</span>
                        </p>
                        <p className="pt-2">welcome to my corner of the internet!</p>
                    </div>

                    <div className="flex flex-col gap-y-3">
                        <p>
                            Surprise! <a className="italic">(Not really, it's Ashley again)</a>. I'm a 17 year old
                            software engineer from Sweden, the land of blåhajar and amazing meatballs.
                        </p>
                        <p>
                            My passions? Server administration, software development, and a sily block game that I can't
                            seem to put down.
                        </p>
                        <p>
                            When my fingers aren't typing code, you'll usually find me cooking up something in the
                            kitchen, wandering through nature, and sometimes playing a few tunes on my guitar.
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl pb-2">$ skills</p>
                        <p>
                            I'm not sure what's more impressive: the fact that I can code or the fact that I can still
                            tie my shoelaces. Anyway, here are a few of the things I'm decent at:
                        </p>

                        <div className="flex flex-col gap-y-3 mt-3">
                            <div className="flex flex-col text-base">
                                <p className="text-xl mb-1">Programming Languages</p>
                                <p className="flex gap-x-2 flex-wrap">
                                    <a className="text-[#92adfd] bg-[#92adfd] bg-opacity-20 px-2 py-1 rounded-md">
                                        TypeScript
                                    </a>
                                    <a className="text-[#fdf192] bg-[#fdf192] bg-opacity-20 px-2 py-1 rounded-md">
                                        JavaScript
                                    </a>
                                    <a className="text-[#92c2fd] bg-[#92c2fd] bg-opacity-20 px-2 py-1 rounded-md">
                                        C++
                                    </a>
                                    <a className="text-[#eb92fd] bg-[#eb92fd] bg-opacity-20 px-2 py-1 rounded-md">
                                        Kotlin
                                    </a>
                                    <a className="text-[#fdc492] bg-[#fdc492] bg-opacity-20 px-2 py-1 rounded-md">
                                        Java
                                    </a>
                                </p>
                            </div>

                            <div className="flex flex-col text-base">
                                <p className="text-xl mb-1">Frameworks</p>
                                <p className="flex gap-x-2 flex-wrap">
                                    <a className="text-[#dfdfdf] bg-[#bfbfbf] bg-opacity-20 px-2 py-1 rounded-md">
                                        Next.js
                                    </a>
                                    <a className="text-[#00c8ff] bg-[#00c8ff] bg-opacity-20 px-2 py-1 rounded-md">
                                        React.js
                                    </a>
                                    <a className="text-[#92fdbd] bg-[#92fdbd] bg-opacity-20 px-2 py-1 rounded-md">
                                        FastAPI
                                    </a>
                                    <a className="text-[#fd9692] bg-[#fd9692] bg-opacity-20 px-2 py-1 rounded-md">
                                        TurboRepo
                                    </a>
                                </p>
                            </div>

                            <div className="flex flex-col text-base">
                                <p className="text-xl mb-1">Technologies & Tools</p>
                                <p className="flex gap-x-2 flex-wrap">
                                    <a className="text-[#9296fd] bg-[#9296fd] bg-opacity-20 px-2 py-1 rounded-md">
                                        Docker
                                    </a>
                                    <a className="text-[#ffd700] bg-[#ffd700] bg-opacity-20 px-2 py-1 rounded-md">
                                        Linux
                                    </a>
                                    <a className="text-[#fdaf92] bg-[#fdaf92] bg-opacity-20 px-2 py-1 rounded-md">
                                        Git
                                    </a>
                                    <a className="text-[#d092fd] bg-[#d092fd] bg-opacity-20 px-2 py-1 rounded-md">
                                        CI/CD
                                    </a>
                                    <a className="text-[#92c9fd] bg-[#92c9fd] bg-opacity-20 px-2 py-1 rounded-md">
                                        Azure
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl pb-2">$ contact</p>
                        <p>You'll find me all over the web:</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
