import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="text-ash_primary-400 flex justify-between border-ash_primary-400 border-2 rounded-xl px-3 py-2 mb-10">
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
            <div className="text-ash_primary-400 px-5">
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
        </main>
    );
}
