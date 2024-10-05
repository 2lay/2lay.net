import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "2lay.net",
    description: "Hey there! Welcome to my website",
};

export default function Home() {
    return (
        <main className="flex items-center justify-center">
            <div className="text-neutral-100 text-center p-6">
                <div className="flex flex-col gap-y-4 items-center">
                    <div>
                        <p className="text-6xl text-pink-300 animate-bounce">{">w<"}</p>
                        <p className="text-2xl font-semibold text-gray-300">uh oh, this page is not here</p>
                    </div>
                    <Link
                        href="/"
                        className="flex justify-between items-center space-x-2 px-4 py-2 transition-all duration-300 ease-in-out bg-[#f9a8d433] hover:bg-[#f9a8d44D] text-[#f9a8d4] hover:shadow-[5px_5px_0px_0px_#f472b6]"
                    >
                        <span>Go Home</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
