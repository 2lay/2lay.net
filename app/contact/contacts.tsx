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

export default function Contacts() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("2lay");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="flex flex-col gap-y-3 mt-3 max-w-64">
            <div className="relative">
                <a
                    className="flex justify-between items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
                    style={{
                        color: "#95a0ff",
                        backgroundColor: "#95a0ff33",
                    }}
                    onClick={handleCopy}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#95a0ff4D";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#95a0ff33";
                    }}>
                    <span>{copied ? "Copied username!" : "Discord"}</span>
                    <span className="font-semibold" style={{ color: "#6870b6" }}>
                        2lay
                    </span>
                </a>
            </div>
            {contactLinks.map((link, index) => (
                <div key={index} className="flex flex-col space-y-2">
                    <div className="relative">
                        <a
                            href={link.href}
                            className="flex justify-between items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
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
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
