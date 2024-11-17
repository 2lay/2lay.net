<script>
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<Navigation />

<div
	class="flex min-h-screen flex-col items-center justify-center text-neutral-900 dark:text-neutral-50"
>
	<div class="text-3xl">I'm <span class="font-bold">Ashley</span></div>
	<div class="max-w-xl p-2 text-center">
		I'm a web developer and systems administrator from Sweden.
	</div>
</div>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1440 320"
	class="w-full fill-zinc-300 dark:fill-zinc-800"
>
	<path
		fill-opacity="1"
		d="M0,192L60,165.3C120,139,240,85,360,101.3C480,117,600,203,720,224C840,245,960,203,1080,170.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
	></path>
</svg>
<div class="bg-zinc-300 dark:bg-zinc-800">
	<div class="container mx-auto h-full rounded-lg">
		<div class="flex flex-col gap-4 text-center">
			<h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Projects</h2>
		</div>
		<div class="grid grid-cols-1 place-items-center gap-6 p-4">
			<div class="max-w-sm rounded-lg bg-[#DCDCDF] p-6 transition-all dark:bg-[#202023]">
				<div class="mb-4 flex flex-row items-center gap-3">
					<img
						src="https://avatars.githubusercontent.com/u/116913506?v=4"
						alt="TMW.gg"
						class="h-12 w-12 rounded-full"
					/>
					<h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-50">TMW.gg</h3>
				</div>
				<div class="mt-2 space-y-3">
					<p class="text-sm text-neutral-600 dark:text-neutral-300">
						<span class="font-medium">Technologies:</span> Svelte(Kit), TailwindCSS, Java
						<span class="italic">(Forge, NeoForge)</span>, PostgreSQL, PHP, Linux, Docker
					</p>
					<p class="text-sm text-neutral-700 dark:text-neutral-200">
						TMW.gg is a free-to-join Minecraft server network that delivers a lag-free and engaging
						modded experience.
					</p>
					<div class="flex justify-center">
						<a
							href="https://t.me/TMW_gg"
							class="flex rounded-lg bg-pink-50/90 px-2.5 py-1.5 text-zinc-900 duration-150 hover:scale-[1.02] hover:bg-pink-50 hover:text-pink-600 dark:bg-pink-300/10 dark:text-zinc-50 hover:dark:bg-pink-300/20 dark:hover:text-pink-100"
						>
							<p>Visit TMW.gg</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1440 320"
	class="w-full fill-zinc-300 dark:fill-zinc-800"
>
	<path
		fill-opacity="1"
		d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
	></path>
</svg>
<div class="container mx-auto max-w-4xl px-4">
	<div
		class="rounded-2xl bg-zinc-300/50 px-12 py-14 dark:bg-zinc-800/50 -rotate-3"
	>
		<div class="flex flex-col items-center gap-6 rotate-3">
			<h2 class="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Want to work together?</h2>
			<p class="max-w-lg text-center text-lg text-zinc-700 dark:text-zinc-300">
				I'm open to new opportunities and collaborations.
			</p>
			<a
				href="mailto:hello@2lay.net"
				class="flex rounded-xl bg-pink-50/80 px-6 py-3 text-zinc-900 duration-200 hover:scale-[1.02] hover:bg-pink-50 hover:text-pink-600 dark:bg-pink-300/10 dark:text-zinc-50 dark:hover:text-pink-100"
			>
				Get in Touch
			</a>
		</div>
	</div>
<footer class="mt-24 pb-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
  <p>© {new Date().getFullYear()} 2lay.net • All rights reserved</p>
</footer>
</div>
