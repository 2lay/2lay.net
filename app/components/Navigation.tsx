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
<div className="gap-x-3 flex">
    {links.map((link) => (
        <div key={link.href} className="relative">
            <Link href={link.href} className="text-purple-400 group hover:text-purple-500 duration-300 text-lg relative">
                {link.label}
                <span
                    className={`absolute left-0 bottom-[-0.1rem] h-[2px] bg-purple-400 duration-300 ease-in-out
                    ${pathname === link.href ? "w-full" : "w-0"} group-hover:bg-purple-500`}
                ></span>
            </Link>
        </div>
    ))}
</div>


    );
}
