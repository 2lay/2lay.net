import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import type { Metadata } from "next"
import InfraClient from "./page.client";

const year = Math.floor((Date.now() - 1162847400000) / 1000 / 60 / 60 / 24 / 365);

export const metadata: Metadata = {
    title: "2lay.net - ecosystem",
    description: "devices, servers, services and software that i depend and use on a daily basis",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default async function Home() {
    return (
        <main className="bg-black text-white min-h-screen w-screen flex">
            <div className="max-w-3xl w-full">
                <Navbar />
                <InfraClient />
            
                <Footer />
            </div>
        </main>
    )
}
