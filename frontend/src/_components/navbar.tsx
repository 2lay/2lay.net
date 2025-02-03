const Navbar = () => {
    return (
        <div class="flex content-center justify-between bg-zinc-900 border-1 rounded-2xl border-zinc-700 px-2 py-2 max-w-6xl mx-auto">
            <p class="text-zinc-200 text-2xl font-bold tracking-tight hover:text-zinc-100 transition-colors cursor-pointer my-auto px-2">2lay<a class="font-normal">.net</a></p>
            <div class="px-3 py-1 flex flex-wrap text-zinc-200 gap-2">
                <p class="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer">Home</p>
                <p class="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer">Projects</p>
                <p class="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer">Contact</p>
            </div>
        </div>
    )
}

export default Navbar
