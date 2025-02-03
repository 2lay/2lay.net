import { useLocation, A } from "@solidjs/router";

const Navbar = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div class="mx-auto flex content-center justify-between text-lg">
      <div class="border border-zinc-700 px-4 py-2 transition-shadow hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary">
        <p class="cursor-pointer text-4xl font-bold tracking-tight text-zinc-200 transition-colors hover:text-zinc-100">
          2lay<span class="font-normal text-4xl">.net</span>
        </p>
      </div>
      <div class="flex flex-wrap py-2 text-zinc-200 space-x-8">
        <A href="/" class={`border border-zinc-700 px-4 py-2 ${location.pathname === '/' ? 'bg-zinc-800 shadow-out-primary' : 'hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary'} transition-shadow text-xl`}>Home</A>
        <A href="/projects" class={`border border-zinc-700 px-4 py-2 ${location.pathname === '/projects' ? 'bg-zinc-800 shadow-out-primary' : 'hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary'} transition-shadow text-xl`}>Projects</A>
        <A href="/contact" class={`border border-zinc-700 px-4 py-2 ${location.pathname === '/contact' ? 'bg-zinc-800 shadow-out-primary' : 'hover:bg-zinc-800 shadow-in-primary hover:shadow-out-primary'} transition-shadow text-xl`}>Contact</A>
      </div>
    </div>
  );
};

export default Navbar;
