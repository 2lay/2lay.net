import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen justify-between">
            {/* nav */}
            <div className="text-ash_primary-400 flex justify-between border-ash_primary-400 border-2 rounded-xl px-3 py-2 mb-5 mt-5 mx-2">
                <div className="flex">
                    <h1 className="font-extrabold">2lay.net</h1>
                    <h1 className="mx-1"> |</h1>
                    <h1 className="font-thin">she/her/hers</h1>
                </div>
                <div className="flex gap-2">
                    <p>[ Home ]</p>
                    <p>[ Home ]</p>
                    <p>[ Home ]</p>
                </div>
            </div>

            {/* content */}
            <div className="text-ash_primary-400 px-5 flex-grow">
                <div>
                    <div className="flex items-center mb-3">
                        <img src="https://github.com/2lay.png" className="max-w-24 rounded-2xl mr-4" />
                        <div className="inline-block">
                            <p className="text-2xl font-bold text-ash_secondary-500">Ashley</p>
                            <p className="text-ash_secondary-700">she/her/hers</p>
                        </div>
                    </div>
                </div>

                <div className="text-ash_secondary-400 break-words flex flex-col gap-y-6">
                    {/* about me */}
                    <div className="text-sm flex flex-col gap-y-2">
                        <p className="text-xl">
                            Hey there, I'm <a className="font-bold">Ashley</a>!
                        </p>
                        <p>
                            I'm a self-taught systems administrator and developer from Poland, currently residing in
                            Sweden.
                        </p>
                        <p>
                            My favorite interests are Linux and open-source software. Besides that, I love immersing
                            myself in music and video games <a className="font-bold">^w^</a>
                        </p>
                        <p>
                            Besides that i love my <a className="italic">BLÅHAJ Soft toy, shark, 39 ¼ "</a> shork :3
                        </p>
                    </div>

                    {/* last.fm */}
                    <div>
                        <div className="mb-4">
                            <p className="text-lg ">Music</p>
                            <p className="text-sm">I love music, check out what I'm listening to bellow!</p>
                        </div>
                        <div className="backdrop-blur p-6 rounded-lg shadow-2xl flex items-center max-w-md overflow-hidden ">
                            <div className="bg-ash_background-600 absolute w-full h-full inset-0 z-[-1] bg-blend-darken">
                                <div className="bg-[url('https://i1.sndcdn.com/artworks-5Sia68wBvokYFWO5-Av0lmw-t500x500.jpg')] blur-3xl absolute w-full h-full inset-0 z-[-3] opacity-40" />
                            </div>
                            <div className="flex-grow pr-4">
                                <p className="text-emerald-400 text-xs uppercase font-semibold tracking-wider mb-1">
                                    NOW PLAYING
                                </p>
                                <div className="flex items-baseline space-x-2">
                                    <p className="text-white text-lg font-bold leading-none">Huh</p>
                                    <p className="text-gray-300 text-base leading-none">•</p>
                                    <p className="text-gray-400 text-sm">glaive</p>
                                </div>
                                <p className="text-gray-400 text-sm mt-1 italic">a bit of a mad one</p>
                            </div>
                            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                <img
                                    src="https://i1.sndcdn.com/artworks-5Sia68wBvokYFWO5-Av0lmw-t500x500.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* end */}
                </div>
            </div>

            {/* footer */}
            <div className="border-t-2 border-ash_primary-400 text-ash_primary-400 mt-4 px-1 mx-2">
                <div className="flex  justify-between mt-1 mb-2 text-sm font-thin ">
                    <div className="text-center  ">2021-2024 2lay.net</div>
                    <div className="text-center ">read if cute</div>
                </div>
            </div>
        </main>
    );
}
