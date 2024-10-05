"use client";

import Link from "next/link";
import { useState } from "react";

const contactLinks = [
    {
        href: "#",
        title: "Discord",
        username: "2lay",
        color: { r: 149, g: 160, b: 255 },
        secondaryColor: { r: 104, g: 112, b: 182 },
    },
    {
        href: "https://t.me/twolay",
        title: "Telegram",
        username: "twolay",
        color: { r: 149, g: 189, b: 255 },
        secondaryColor: { r: 106, g: 135, b: 182 },
    },
    {
        href: "mailto:ashley@2lay.net",
        title: "Mail",
        username: "ashley@2lay.net",
        color: { r: 240, g: 168, b: 208 },
        secondaryColor: { r: 170, g: 119, b: 147 },
    },
    {
        href: "https://last.fm/user/twolay",
        title: "Last.fm",
        username: "twolay",
        color: { r: 246, g: 117, b: 168 },
        secondaryColor: { r: 184, g: 87, b: 126 },
    },
    {
        href: "https://youtube.com/@2lay",
        title: "YouTube",
        username: "2lay",
        color: { r: 255, g: 113, b: 113 },
        secondaryColor: { r: 194, g: 86, b: 86 },
    },
    {
        href: "https://steamcommunity.com/id/2lay",
        title: "Steam",
        username: "2lay",
        color: { r: 177, g: 188, b: 230 },
        secondaryColor: { r: 145, g: 153, b: 189 },
    },
    {
        href: "https://github.com/2lay",
        title: "GitHub",
        username: "2lay",
        color: { r: 175, g: 175, b: 175 },
        secondaryColor: { r: 128, g: 128, b: 128 },
    },
    {
        href: "https://modrinth.com/user/2lay",
        title: "Modrinth",
        username: "2lay",
        color: { r: 205, g: 242, b: 202 },
        secondaryColor: { r: 153, g: 184, b: 151 },
    },
    {
        href: "https://www.curseforge.com/members/2lay",
        title: "Curseforge",
        username: "2lay",
        color: { r: 255, g: 200, b: 152 },
        secondaryColor: { r: 190, g: 149, b: 114 },
    },
];


export default function Links() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("2lay");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="flex flex-col gap-y-3 mt-3 max-w-96">
            {contactLinks.map((link, index) => (
                <div key={index} className="flex flex-col space-y-2">
                    <Link
                        href={link.href}
                        className={`flex justify-between items-center space-x-2 px-4 py-2 transition-all duration-300 ease-in-out hover:shadow-[5px_5px_0px_0px_var(--shadow-color)]`}
                        style={{
                            '--bg-color': `rgba(${link.color.r}, ${link.color.g}, ${link.color.b}, 0.2)`,
                            '--bg-hover-color': `rgba(${link.color.r}, ${link.color.g}, ${link.color.b}, 0.3)`,
                            '--text-color': `rgb(${link.color.r}, ${link.color.g}, ${link.color.b})`,
                            '--shadow-color': `rgb(${link.color.r}, ${link.color.g}, ${link.color.b})`,
                            backgroundColor: 'var(--bg-color)',
                            color: 'var(--text-color)',
                        } as React.CSSProperties}
                        onClick={link.title === "Discord" ? handleCopy : undefined}
                    >
                        <span>{link.title === "Discord" && copied ? "Copied username!" : link.title}</span>
                        <span
                            className="font-semibold"
                            style={{ color: `rgb(${link.secondaryColor.r}, ${link.secondaryColor.g}, ${link.secondaryColor.b})` }}
                        >
                            {link.username}
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
}
