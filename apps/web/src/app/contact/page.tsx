"use client";
import { useState } from "react";

const contactLinks = [
    {
        href: "https://signal.me/#eu/5qHJPU61wlVVptnGkeqWmfVMP0iAaJonyWglIumBT1HSWQuB3N1LYYP83HrQ6Bk7",
        title: "Signal",
        username: "ashley.1337",
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
];

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
        href: "https://github.com/2lay",
        title: "CuresForge",
        username: "2lay",
        color: "#FFC898",
        secondaryColor: "#be9572",
    },
];

export default function Home() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("2lay");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <main className="pt-8">
            <div className="text-neutral-100 px-5 flex-grow text-lg">
                <div className="flex flex-col gap-y-6">
                    <div>
                        <p className="text-3xl pb-2">
                            <a className="font-bold">$</a> contact me
                        </p>
                        <p>Here are the ways you can contact me:</p>

                        <div className="flex flex-col gap-y-3 mt-3 max-w-64">
                            <div className="relative">
                                {!copied && (
                                    <a
                                        href="#"
                                        className="flex justify-between items-center space-x-2 text-[#95a0ff] bg-[#95a0ff] bg-opacity-20 px-4 py-2 rounded-lg hover:bg-[#95a0ff]/30 transition-colors"
                                        onClick={handleCopy}>
                                        <span>Discord</span>
                                        <span className="font-semibold text-[#6870b6]">2lay</span>
                                    </a>
                                )}

                                {copied && (
                                    <a
                                        href="#"
                                        className="flex justify-between items-center space-x-2 text-[#95a0ff] bg-[#95a0ff] bg-opacity-20 px-4 py-2 rounded-lg hover:bg-[#95a0ff]/30 transition-colors"
                                        onClick={handleCopy}>
                                        <span>Copied username!</span>
                                        <span className="font-semibold text-[#6870b6]">2lay</span>
                                    </a>
                                )}
                            </div>
                            {contactLinks.map((link, index) => (
                                <div key={index} className="flex flex-col space-y-2">
                                    <div className="relative">
                                        <a
                                            href={link.href}
                                            className={`flex justify-between items-center space-x-2 bg-[${link.color}] text-[${link.color}] bg-opacity-20 px-4 py-2 rounded-lg hover:bg-[${link.color}]/30 transition-colors`}>
                                            <span>{link.title}</span>
                                            <span className={`font-semibold text-[${link.secondaryColor}]`}>
                                                {link.username}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-3xl pb-2">
                            <a className="font-bold">$</a> social media
                        </p>
                        <p>... or places where you can find me:</p>
                        <div className="flex flex-col gap-y-3 mt-3 max-w-64">
                            {socialMediaLinks.map((link, index) => (
                                <div key={index} className="flex flex-col space-y-2">
                                    <a
                                        href={link.href}
                                        className={`flex justify-between items-center space-x-2 text-[${link.color}] bg-[${link.color}] bg-opacity-20 px-4 py-2 rounded-lg hover:bg-[${link.color}]/30 transition-colors`}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <span>{link.title}</span>
                                        <span className={`font-semibold text-[${link.secondaryColor}]`}>
                                            {link.username}
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
