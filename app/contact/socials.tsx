"use client";

import Link from "next/link";

const socialMediaLinks = [
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

export default function Socials() {
    return (
        <div className="flex flex-col gap-y-3 mt-3 max-w-64">
            {socialMediaLinks.map((link, index) => (
                <div key={index} className="flex flex-col space-y-2">
                    <Link
                        href={link.href}
                        className="flex justify-between items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: link.color,
                            backgroundColor: `${link.color}33`,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${link.color}4D`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = `${link.color}33`;
                        }}>
                        <span>{link.title}</span>
                        <span className="font-semibold" style={{ color: link.secondaryColor }}>
                            {link.username}
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
}
