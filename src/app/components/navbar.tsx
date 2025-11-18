"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Card from "./card";

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <Card className="flex justify-between">
            <h1><span className="text-cyan-500 font-semibold">2lay</span>.net</h1>
            <div className="flex gap-2">
                <Link 
                    href="/" 
                    className={pathname === "/" 
                        ? "text-cyan-500 underline decoration-cyan-500 underline-offset-4" 
                        : "text-white hover:text-cyan-500"
                    }
                >
                    Home
                </Link>
                <Link 
                    href="/projects" 
                    className={pathname === "/projects" 
                        ? "text-cyan-500 underline decoration-cyan-500 underline-offset-4" 
                        : "text-white hover:text-cyan-500"
                    }
                >
                    Projects
                </Link>
                <Link 
                    href="/ecosystem" 
                    className={pathname === "/ecosystem" 
                        ? "text-cyan-500 underline decoration-cyan-500 underline-offset-4" 
                        : "text-white hover:text-cyan-500"
                    }
                >
                    Ecosystem
                </Link>
            </div>
        </Card>
    )
}
