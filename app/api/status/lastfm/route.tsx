import { NextResponse } from "next/server";

interface TrackImage {
    size: string;
    "#text": string;
}

interface RecentTrack {
    name: string;
    album: { "#text": string };
    artist: { "#text": string };
    image: TrackImage[];
    date: { uts: string };
}

export const GET = async () => {
    const apikey = process.env.LFM_KEY;
    console.log(apikey);
    const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=twolay&limit=1&api_key=${apikey}&format=json`
    );
    const repo = await res.json();
    const req: RecentTrack = repo.recenttracks.track[0];

    const track = req.name;
    const album = req.album["#text"];
    const artist = req.artist["#text"];
    const image = req.image.find((img: TrackImage) => img.size === "large")?.["#text"];
    const date = req.date.uts;

    const response = {
        track,
        album,
        artist,
        image,
        date,
    };

    return new NextResponse(JSON.stringify(response), { headers: { "Content-Type": "application/json" } });
};
