import { Metadata } from "next";

export const metadata: Metadata = {
    title: "2lay.net",
    description: "hey there! welcome to my website",
    twitter: {
        card: 'summary_large_image',
        title: '2lay.net',
        description: 'hey there! welcome to my website',
        images: ["https://github.com/2lay.png"],
      },
};

export default function Home() {
    return (
        <main className="pt-8">
            <div className="text-neutral-100 px-5 flex-grow text-lg">
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-2">
                        <p className="text-3xl">
                            <a className="font-bold">$</a> me
                        </p>
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
                        <p className="text-3xl pb-2 ">
                            <a className="font-bold">$</a> skills
                        </p>
                        <p>
                            I'm not sure what's more impressive: the fact that I can code or the fact that I can still
                            tie my shoelaces. Anyway, here are a few of the things I'm decent at:
                        </p>

                        <div className="flex flex-col gap-y-3 mt-3">
                            <div className="flex flex-col text-base">
                                <p className="text-xl mb-1">Programming Languages</p>
                                <p className="flex gap-x-2 flex-wrap">
                                    <a className="text-[#92adfd] bg-[#92adfd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        TypeScript
                                    </a>
                                    <a className="text-[#fdf192] bg-[#fdf192] bg-opacity-20 px-3 py-1 rounded-lg">
                                        JavaScript
                                    </a>
                                    <a className="text-[#92c2fd] bg-[#92c2fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        C++
                                    </a>
                                    <a className="text-[#eb92fd] bg-[#eb92fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        Kotlin
                                    </a>
                                    <a className="text-[#fdc492] bg-[#fdc492] bg-opacity-20 px-3 py-1 rounded-lg">
                                        Java
                                    </a>
                                </p>
                            </div>

                            <div className="flex flex-col text-base">
                                <p className="text-xl mb-1">Frameworks</p>
                                <p className="flex gap-x-2 flex-wrap">
                                    <a className="text-[#dfdfdf] bg-[#bfbfbf] bg-opacity-20 px-3 py-1 rounded-lg">
                                        Next.js
                                    </a>
                                    <a className="text-[#92c4fd] bg-[#92c4fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        React.js
                                    </a>
                                    <a className="text-[#92fdbd] bg-[#92fdbd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        FastAPI
                                    </a>
                                    <a className="text-[#fd9692] bg-[#fd9692] bg-opacity-20 px-3 py-1 rounded-lg">
                                        TurboRepo
                                    </a>
                                </p>
                            </div>

                            <div className="flex flex-col text-base">
                                <p className="text-xl mb-1">Technologies & Tools</p>
                                <p className="flex gap-x-2 flex-wrap">
                                    <a className="text-[#9296fd] bg-[#9296fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        Docker
                                    </a>
                                    <a className="text-[#fdfb92] bg-[#fdfb92] bg-opacity-20 px-3 py-1 rounded-lg">
                                        Linux
                                    </a>
                                    <a className="text-[#fdaf92] bg-[#fdaf92] bg-opacity-20 px-3 py-1 rounded-lg">
                                        Git
                                    </a>
                                    <a className="text-[#d092fd] bg-[#d092fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        CI/CD
                                    </a>
                                    <a className="text-[#92c9fd] bg-[#92c9fd] bg-opacity-20 px-3 py-1 rounded-lg">
                                        Azure
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
