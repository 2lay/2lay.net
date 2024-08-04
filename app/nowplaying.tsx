"use client";
import { useState, useEffect } from "react";
import { formatDistanceToNow, fromUnixTime } from "date-fns";

const initialMusic = {
    track: "Loading...",
    album: "Loading...",
    artist: "Loading...",
    image: "",
    date: null,
};

const blankSvg = `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="rgb(30, 30, 30)" />
    </svg>
`;
const encodeSvgToBase64 = (svg: string): string => `data:image/svg+xml;base64,${btoa(svg)}`;

export default function NowPlaying() {
    const [music, setMusic] = useState(initialMusic);
    const [timeAgo, setTimeAgo] = useState<string | null>(null);

    useEffect(() => {
        const fetchMusicStatus = async () => {
            try {
                const response = await fetch("/api/status/lastfm");
                if (response.ok) {
                    const data = await response.json();
                    setMusic(data);

                    if (data.date) {
                        const timestamp = Number(data.date);
                        if (!isNaN(timestamp)) {
                            const date = fromUnixTime(timestamp);
                            const distance = formatDistanceToNow(date, { includeSeconds: false });

                            // Show "Now Playing" if the music status was updated less than a minute ago
                            const secondsAgo = (new Date().getTime() - date.getTime()) / 1000;
                            if (secondsAgo < 60) {
                                setTimeAgo("Now Playing");
                            } else {
                                setTimeAgo(distance + "ago");
                            }
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching music status:", error);
            }
        };

        fetchMusicStatus();
        const intervalId = setInterval(fetchMusicStatus, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const imageUrl = music.image || encodeSvgToBase64(blankSvg);

    return (
        <div className="backdrop-blur p-5 rounded-lg shadow-2xl flex items-center max-w-md overflow-hidden">
            <div className="bg-neutral-900 absolute w-full h-full inset-0 z-[-1] bg-blend-darken">
                <div
                    className="blur-3xl absolute w-full h-full inset-0 z-[-3] opacity-40"
                    style={{ backgroundImage: `url(${imageUrl})` }}></div>
            </div>
            <div className="flex-grow pr-4">
                <p className="text-emerald-400 text-xs uppercase font-semibold tracking-wider mb-1">{timeAgo}</p>
                <div className="flex items-baseline space-x-2">
                    <p className="text-white text-lg font-bold leading-none">{music.track}</p>
                    <p className="text-gray-300 text-base leading-none">•</p>
                    <p className="text-gray-400 text-sm">{music.artist}</p>
                </div>
                <p className="text-gray-400 text-sm mt-1 italic">{music.album}</p>
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                <img src={imageUrl} alt="Song" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
