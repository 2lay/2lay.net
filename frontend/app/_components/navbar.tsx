const Navbar = () => {
    return (
        <div className="mx-auto flex content-center justify-between text-lg">
            <div className="border border-zinc-700 px-4 py-2 transition-shadow hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary">
                <p className="cursor-pointer text-4xl font-bold tracking-tight text-zinc-200 transition-colors hover:text-zinc-100">
                    2lay<span className="font-normal text-4xl">.net</span>
                </p>
            </div>
            <div className="flex flex-wrap py-2 text-zinc-200 space-x-8">
                <a href="/" className={`border border-zinc-700 px-4 py-2 hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary transition-shadow text-xl`}>Home</a>
                <a href="/projects" className={`border border-zinc-700 px-4 py-2 hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary transition-shadow text-xl`}>Projects</a>
                <a href="/contact" className={`border border-zinc-700 px-4 py-2 hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary transition-shadow text-xl`}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
