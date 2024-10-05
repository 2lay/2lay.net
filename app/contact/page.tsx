import { Metadata } from "next";
import Links from "./links";

export const metadata: Metadata = {
    title: "2lay.net - contact",
    description: "wanna contact me?",
    twitter: {
        card: "summary_large_image",
        title: "2lay.net - contact",
        description: "wanna contact me?",
        images: ["https://github.com/2lay.png"],
    },
};

export default function Home() {
    return (
        <main className="flex flex-col gap-y-6 text-neutral-100 px-5 flex-grow text-lg">
            <div>
                <p className="text-3xl pb-2">
                    <span className="font-bold">$</span> find me
                </p>
                <p>here's some placed you can find me on</p>
                <Links />
            </div>
        </main>
    );
}
