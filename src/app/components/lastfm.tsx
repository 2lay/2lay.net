"use client"

import Link from "next/link"
import Card from "./card"
import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"

export default function Lastfm() {
    const { data: recentPlayed } = useQuery({
        queryKey: ['lastfm', 'recent'],
        queryFn: async () => {
            const response = await client.lastfm.recent.$get()
            return response.json()
        }
    })

    return (
        <Card>
            <h2 className="text-2xl font-semibold mb-2 text-pink-500"># last-played</h2>
            <p className="mb-4">
                i love music, here's my most recent track from last.fm:
            </p>
            <div className="flex flex-row gap-4 items-center">
                {recentPlayed?.image?.[3]?.["#text"] ? (
                    <img src={recentPlayed.image[3]["#text"]} alt="album cover" width={90} height={90} className="border-pink-500 border-1" />
                ) : (
                    <div className="w-[90px] h-[90px] bg-pink-500/60 border-1 border-pink-500"></div>
                )}
                <div className="flex flex-col gap-1 text-sm flex-1">
                    <p className="text-white/80">
                        <span className="text-pink-500">{'>'}</span> track: <span className="text-white">{recentPlayed?.name || "loading..."}</span>
                    </p>
                    <p className="text-white/80">
                        <span className="text-pink-500">{'>'}</span> artist: <span className="text-white">{recentPlayed?.artist?.["#text"] || "loading..."}</span>
                    </p>
                    <p className="text-white/80">
                        <span className="text-pink-500">{'>'}</span> album: <span className="text-white">{recentPlayed?.album?.["#text"] || "loading..."}</span>
                    </p>
                    <p className="text-white/80">
                        <span className="text-pink-500">{'>'}</span> status: <span className="text-white">{recentPlayed ? (recentPlayed.date ? (() => {
                            const playedTime = parseInt(recentPlayed.date.uts) * 1000;
                            const now = Date.now();
                            const diffMs = now - playedTime;
                            const diffMinutes = Math.floor(diffMs / (1000 * 60));
                            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
                            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

                            if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
                            if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
                            if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
                            return 'just now';
                        })() : "playing now") : "loading..."}</span>
                    </p>
                </div>
            </div>
            <div className="mt-3 pt-2 border-t border-pink-500/20">
                <Link href="https://last.fm/user/iwas15with100k" className="text-pink-500 hover:text-pink-500/80 font-semibold group text-sm">
                    <span className="text-pink-500">$</span> <span className="text-white group-hover:text-white/80">curl</span> <span className="text-pink-500 group-hover:text-pink-500/80">last.fm/user/iwas15with100k</span>
                </Link>
            </div>
        </Card>
    )
}
