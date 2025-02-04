import { useLocation } from "react-router";

const routes = [
    { path: "/", name: "home" },
    { path: "/projects", name: "projects" },
    { path: "/contact", name: "contact" }
]

const Navbar = () => {
    const location = useLocation()
    return (
        <div className="mx-auto flex content-center justify-between text-lg">
            <div className="border border-zinc-700 px-4 py-2 transition-shadow bg-zinc-800 shadow-out-primary   ">
                <p className="cursor-pointer text-4xl font-bold tracking-tight text-zinc-200 transition-colors hover:text-zinc-100">
                    2lay<span className="font-normal text-4xl">.net</span>
                </p>
            </div>
            <div className="flex flex-wrap py-2 text-zinc-200 space-x-8">
                {routes.map((route) => (
                    <a href={route.path} className={`border border-zinc-700 px-4 py-2 transition-shadow text-xl ${location.pathname === route.path ? "shadow-out-primary bg-zinc-800" : "shadow-in-primary hover:shadow-out-primary hover:bg-zinc-800"}`}>{route.name}</a>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
