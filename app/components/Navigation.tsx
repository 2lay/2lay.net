"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavLink {
    label: string;
    href: string;
}

const links: NavLink[] = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "contact", href: "/contact" },
];

export default function Navigation() {
    const pathname = usePathname();
    const [prevPathname, setPrevPathname] = useState(pathname);

    useEffect(() => {
        if (pathname !== prevPathname) {
            setPrevPathname(pathname);
        }
    }, [pathname]);

    return (
        <div className="gap-x-4 flex">
            {links.map((link) => (
                <div key={link.href} className="relative">
                    <Link href={link.href} className="text-neutral-100 text-lg relative group">
                        {link.label}
                        <div className="relative flex justify-center top-2.5">
                            <span
                                className={`absolute bottom-2 h-1 bg-ash_primary-500 rounded-md transition-all duration-300 ease-in-out ${
                                    pathname === link.href ? "w-[50%]" : "w-0"
                                }`}></span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
