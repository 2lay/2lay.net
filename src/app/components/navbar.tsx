"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Card from "./card";

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <Card className="flex justify-between">
            <h1><span className="text-pink-500 font-semibold">2lay</span>.net</h1>
            <div className="flex gap-2">
                <Link 
                    href="/" 
                    className={pathname === "/" 
                        ? "text-pink-500 underline decoration-pink-500 underline-offset-4" 
                        : "text-white hover:text-pink-500"
                    }
                >
                    Home
                </Link>
                <Link 
                    href="/projects" 
                    className={pathname === "/projects" 
                        ? "text-pink-500 underline decoration-pink-500 underline-offset-4" 
                        : "text-white hover:text-pink-500"
                    }
                >
                    Projects
                </Link>
            </div>
        </Card>
    )
}
