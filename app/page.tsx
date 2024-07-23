import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen justify-between">
            {/* nav */}
            <div className="text-ash_primary-400 flex justify-between border-ash_primary-400 border-2 rounded-xl px-3 py-2 mb-10 mt-5 mx-2">
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
                    <div className="flex items-center mb-5">
                        <img src="https://github.com/2lay.png" className="max-w-24 rounded-3xl mr-4" />
                        <div className="inline-block">
                            <p className="text-2xl font-bold text-ash_secondary-500">Ashley</p>
                            <p className="text-ash_secondary-700">she/her/hers</p>
                        </div>
                    </div>
                </div>
                <div className="text-ash_secondary-400 break-words">
                    <p className="mb-4">Hey there, I'm Ashley! </p>
                    <p className="mb-2">
                        I'm a self-taught systems administrator and developer from Poland, currently residing in Sweden.
                    </p>
                    <p>
                        My favorite interests are Linux and open-source software. Besides that, I love immersing myself
                        in music and video games <a className="font-bold">^w^</a>
                    </p>
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
