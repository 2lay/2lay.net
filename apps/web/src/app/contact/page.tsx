import Contacts from "./contacts";
import Socials from "./socials";
import { Metadata } from "next";

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
        <main className="pt-8">
            <div className="text-neutral-100 px-5 flex-grow text-lg">
                <div className="flex flex-col gap-y-6">
                    <div>
                        <p className="text-3xl pb-2">
                            <a className="font-bold">$</a> contact me
                        </p>
                        <p>Here are the ways you can contact me:</p>
                        <Contacts />
                    </div>

                    <div>
                        <p className="text-3xl pb-2">
                            <a className="font-bold">$</a> social media
                        </p>
                        <p>... or places where you can find me:</p>
                        <Socials />
                    </div>
                </div>
            </div>
        </main>
    );
}
