"use client";

import { useState } from "react";

const contactLinks = [
    {
        href: "t.me/twolay",
        title: "Telegram",
        username: "twolay",
        color: "#95BDFF",
        secondaryColor: "#6a87b6",
    },
    {
        href: "mailto:mail@2lay.net",
        title: "Mail",
        username: "mail@2lay.net",
        color: "#F0A8D0",
        secondaryColor: "#aa7793",
    },
    {
        href: "https://last.fm/user/twolay",
        title: "Last.fm",
        username: "twolay",
        color: "#F675A8",
        secondaryColor: "#b8577e",
    },
    {
        href: "https://youtube.com/@2lay",
        title: "YouTube",
        username: "2lay",
        color: "#FF7171",
        secondaryColor: "#c25656",
    },
    {
        href: "https://steamcommunity.com/id/2lay",
        title: "Steam",
        username: "2lay",
        color: "#B1BCE6",
        secondaryColor: "#9199bd",
    },
    {
        href: "https://github.com/2lay",
        title: "GitHub",
        username: "2lay",
        color: "#afafaf",
        secondaryColor: "#808080",
    },
    {
        href: "https://modrinth.com/user/2lay",
        title: "Modrinth",
        username: "2lay",
        color: "#CDF2CA",
        secondaryColor: "#99b897",
    },
    {
        href: "https://www.curseforge.com/members/2lay",
        title: "Curseforge",
        username: "2lay",
        color: "#FFC898",
        secondaryColor: "#be9572",
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
        <div className="flex flex-col gap-y-3 mt-3 max-w-64">
            {/* Discord Copy Button */}
            <div className="relative">
                <a
                    className="flex justify-between items-center space-x-2 px-4 py-2 transition ease-in-out"
                    style={{
                        color: "#95a0ff",
                        backgroundColor: "#95a0ff33",
                        boxShadow: "0px 0px 0px 0px #95a0ff",
                    }}
                    onClick={handleCopy}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#95a0ff4D";
                        e.currentTarget.style.boxShadow = "5px 5px 0px 0px #95a0ff";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#95a0ff33";
                        e.currentTarget.style.boxShadow = "0px 0px 0px 0px #95a0ff";
                    }}
                >
                    <span>{copied ? "Copied username!" : "Discord"}</span>
                    <span className="font-semibold" style={{ color: "#6870b6" }}>
                        2lay
                    </span>
                </a>
            </div>

            {/* Contact Links */}
            {contactLinks.map((link, index) => (
                <div key={index} className="flex flex-col space-y-2">
                    <div className="relative">
                        <a
                            href={link.href}
                            className="flex justify-between items-center space-x-2 px-4 py-2 transition ease-in-out"
                            style={{
                                color: link.color,
                                backgroundColor: `${link.color}33`,
                                boxShadow: `0px 0px 0px 0px ${link.color}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${link.color}4D`;
                                e.currentTarget.style.boxShadow = `5px 5px 0px 0px ${link.color}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = `${link.color}33`;
                                e.currentTarget.style.boxShadow = `0px 0px 0px 0px ${link.color}`;
                            }}
                        >
                            <span>{link.title}</span>
                            <span className="font-semibold" style={{ color: link.secondaryColor }}>
                                {link.username}
                            </span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
