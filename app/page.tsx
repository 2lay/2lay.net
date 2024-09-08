import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "2lay.net",
    description: "hey there! welcome to my website",
    twitter: {
        card: "summary_large_image",
        title: "2lay.net",
        description: "hey there! welcome to my website",
        images: ["https://github.com/2lay.png"],
    },
};

export default function Home() {
    return (
        <main className="my-4">
            <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-10 lg:px-20 py-4 space-y-6 md:space-y-0 md:space-x-8">
                <Image
                    src="https://github.com/2lay.png"
                    width={250}
                    height={250}
                    alt="my avatar"
                    className="rounded-xl object-cover w-32 h-32 md:w-64 md:h-64"
                />
                <div className="flex flex-col justify-center max-w-xl text-center md:text-left">
                    <p className="text-2xl font-bold pb-2">About me</p>
                    <div className="text-base space-y-3">
                        <div>
                            <p>My name is Ashley!</p>
                            <p>I am a full-stack developer and sysadmin, currently studying economics.</p>
                        </div>
                        <div>
                            <p>
                                Want to learn more about me? Check out my <Link href="/projects" className="text-pink-300">projects</Link> page.
                            </p>
                            <p>
                                Want to chat? Don't hesitate to <Link href="/contact" className="text-blue-300">contact</Link> me. I love making new friends!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
