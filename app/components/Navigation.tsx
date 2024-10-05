"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
interface NavLink {
    label: string;
    href: string;
}

const links: NavLink[] = [
    { label: "home", href: "/" },
    { label: "projects", href: "/projects" },
    { label: "contact", href: "/contact" },
];

export default function Nav() {
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
                    <Link href={link.href} className="text-pink-300 group hover:text-pink-400 duration-300 text-lg relative">
                        {link.label}
                        <span
                            className={`absolute left-0 bottom-[-0.1rem] h-[2px] bg-pink-300 duration-300 ease-in-out
                    ${pathname === link.href ? "w-full" : "w-0"} group-hover:bg-pink-400`}
                        ></span>
                    </Link>
                </div>
            ))}
        </div>


    );
}
