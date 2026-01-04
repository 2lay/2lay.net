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
            <div className="flex items-center gap-2 mb-2 justify-between">
                <h2 className="text-2xl font-semibold text-violet-500">music</h2>
                <p className="text-white/20 text-sm italic mx-3">from last.fm</p>
            </div>

            <div className="flex gap-4 items-start">
                {recentPlayed?.image?.[3]?.["#text"] ? (
                    <img
                        src={recentPlayed.image[3]["#text"]}
                        alt="album cover"
                        width={80}
                        height={80}
                        className="rounded-sm border border-violet-500/20"
                    />
                ) : (
                    <div className="w-[80px] h-[80px] bg-violet-500/10 rounded-sm border border-violet-500/20"></div>
                )}

                <div className="flex-1 space-y-2">
                    <div>
                        <h3 className="text-white font-medium text-base">
                            {recentPlayed?.name || "loading..."}
                        </h3>
                        <p className="text-white/60 text-sm">
                            {recentPlayed?.artist?.["#text"] || "loading..."}
                        </p>
                    </div>

                    <div className="text-xs">
                        <span className="text-white/50">
                            {recentPlayed ? (recentPlayed.date ? (() => {
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
                            })() : "playing now") : "loading..."}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
