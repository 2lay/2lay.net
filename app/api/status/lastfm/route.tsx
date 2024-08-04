import { NextResponse } from "next/server";
export const fetchCache = "force-no-store";
interface TrackImage {
    size: string;
    "#text": string;
}

interface RecentTrack {
    name: string;
    album: { "#text": string };
    artist: { "#text": string };
    image: TrackImage[];
    date?: { uts: string; "#text"?: string };
    "@attr"?: { nowplaying?: string };
}

export const GET = async () => {
    const apikey = process.env.LFM_KEY;
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=twolay&limit=1&api_key=${apikey}&format=json`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const track = data.recenttracks.track[0] as RecentTrack;

        const imageUrl = track.image.find((img) => img.size === "large")?.["#text"];
        const nowPlaying = track["@attr"]?.nowplaying === "true" ? "1" : undefined;
        const responseDate = track.date?.["uts"] || nowPlaying;

        const response = {
            track: track.name,
            album: track.album["#text"],
            artist: track.artist["#text"],
            image: imageUrl,
            date: responseDate,
        };

        return new NextResponse(JSON.stringify(response), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: "failed to fetch recent tracks" }), {
            headers: { "Content-Type": "application/json" },
            status: 500,
        });
    }
};
