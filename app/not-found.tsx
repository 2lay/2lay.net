import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "2lay.net",
    description: "Hey there! Welcome to my website",
};

export default function Home() {
    return (
        <main className="flex items-center justify-center min-h-[50vh]">
            <div className="text-neutral-100 text-center p-6">
                <div className="flex flex-col gap-y-4 items-center">
                    <div>
                        <p className="text-6xl text-purple-500 animate-bounce">{">w<"}</p>
                        <p className="text-2xl font-semibold text-gray-300">uh oh, this page is not here</p>
                    </div>

                    <Link
                        href="/"
                        className="flex justify-center items-center space-x-2 px-5 py-2 rounded-lg text-purple-500 transition-colors transform hover:text-purple-400 font-semibold">
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
