<script lang="ts">
	let tooltip: HTMLElement;
	let link: HTMLElement;

	import { onMount } from 'svelte';

	let nullptrRing: Array<{ url: string; image: string }> = [];

	// note for me: if you're still using vercel, upload all imgs to uploadthing
	// remove comment when you move tmw's infra off your vps
	const staticImages = [
		'/8831.png',
		'https://utfs.io/f/0nYClWA9oiImqK9PBNu2qiLjEfzdaRBoI7wgvGmFuhtk0QUc',
		'https://utfs.io/f/0nYClWA9oiIm4BmNmw90vTL2nk0aNJXQUA8lzOh63cMmIFH7',
		'https://utfs.io/f/0nYClWA9oiImw3Dtk9j8dUwm7QrzLqoZWaBDS3kVsvRCxl0I',
		'https://utfs.io/f/0nYClWA9oiImlL128zc9FYjNg7EMuOpWqBmyVvKfDIirCR0t',
		'https://utfs.io/f/0nYClWA9oiImW48VBigrCBaJGy1hmXFT0Z8Kw2xobj3E5IRz',
		'https://utfs.io/f/0nYClWA9oiImXvtfzql5MEl6hPZF1meD27Azu8SCsTQUWXqy'
	];

	onMount(async () => {
		try {
			const response = await fetch('https://ring.nullp.tr/api/sites');
			const sites = await response.json();
			nullptrRing = sites
				.filter((site: any) => site.image && !site.url.includes('2lay.net'))
				.map((site: any) => ({
					url: site.url,
					image: site.image
				}));
		} catch (error) {
			console.error('failed to fetch nullptr ring images:', error);
		}
	});
</script>

<svelte:head>
	<title>2lay.net</title>
	<meta name="description" content="hi, I'm ella." />
	<meta name="keywords" content="ella, software engineer, developer, student, programming" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="2lay.net" />
	<meta property="og:description" content="hi, I'm ella." />
	<meta property="og:url" content="https://2lay.net" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="2lay.net" />
	<meta name="twitter:description" content="hi, I'm ella." />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://2lay.net" />
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<div class="m-4 max-w-2xl border border-[#CE97A6] bg-[#101010] p-2 text-white">
	<div>
		<div class="mb-2 flex items-center gap-2">
			<img
				src="https://github.com/2lay.png"
				alt="avatar"
				class="h-12 w-12 border border-[#CE97A6]"
			/>
			<p class="text-2xl">hi, i'm <span class="text-[#CE97A6]">ella</span></p>
		</div>
		<p class="text-sm">i'm a 18 year old student and software engineer from sweden.</p>
	</div>
</div>

<div class="m-4 max-w-2xl border border-[#CE97A6] bg-[#101010] p-2 text-white">
	<p class="text-xl text-[#CE97A6]"># find-me</p>
	<p class="mt-2 text-sm">i'm active all over the place, but you can find me here:</p>
	<ul class="mt-2 list-none space-y-1 text-sm">
		<li>
			<div class="relative">
				<button
					type="button"
					class="block w-full text-left transition-colors hover:text-[#CE97A6]"
					on:click={() =>
						(tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block')}
					bind:this={link}
					on:keydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
						}
					}}
					role="button"
					aria-haspopup="dialog"
				>
					<span class="text-[#CE97A6]">></span> discord
				</button>
				<div class="hidden" bind:this={tooltip} role="dialog" aria-modal="true">
					<div
						class="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/50"
						on:click|self={() => (tooltip.style.display = 'none')}
					>
						<div
							class="relative mx-4 w-full max-w-sm border border-[#CE97A6] bg-[#101010] p-4 text-sm"
						>
							<button
								class="absolute right-2 top-2 text-[#CE97A6] transition-colors hover:text-[#7f5d66]"
								on:click={() => (tooltip.style.display = 'none')}
							>
								close
							</button>
							<p>hiya, my discord username is <strong>2lay</strong></p>
						</div>
					</div>
				</div>
			</div>
		</li>

		<li>
			<a
				href="https://github.com/2lay"
				target="_blank"
				rel="noopener noreferrer"
				class="block transition-colors hover:text-[#CE97A6]"
			>
				<span class="text-[#CE97A6]">></span> github
			</a>
		</li>

		<li>
			<a href="mailto:hi@2lay.net" class="block transition-colors hover:text-[#CE97A6]">
				<span class="text-[#CE97A6]">></span> email
			</a>
		</li>

		<li>
			<a
				href="https://x.com/twolays"
				target="_blank"
				rel="noopener noreferrer"
				class="block transition-colors hover:text-[#CE97A6]"
			>
				<span class="text-[#CE97A6]">></span> twitter
			</a>
		</li>

		<li>
			<a
				href="https://last.fm/user/twolay"
				target="_blank"
				rel="noopener noreferrer"
				class="block transition-colors hover:text-[#CE97A6]"
			>
				<span class="text-[#CE97A6]">></span> last.fm
			</a>
		</li>
	</ul>
</div>

<div class="m-4 max-w-2xl border border-[#CE97A6] bg-[#101010] p-2 text-white">
	<p class="text-xl text-[#CE97A6]"># projects</p>
	<ul class="mt-2 list-none space-y-1 text-sm">
		<li>
			<a
				href="https://tmw.gg"
				target="_blank"
				rel="noopener noreferrer"
				class="block transition-colors hover:text-[#CE97A6]"
			>
				<span class="text-[#CE97A6]">></span> tmw.gg
				<p class="ml-4 text-xs text-gray-400">modded minecraft network</p>
			</a>
		</li>
	</ul>
</div>

<div class="m-4 max-w-2xl border border-[#CE97A6] bg-[#101010] p-2 text-white">
	<p class="text-xl text-[#CE97A6]"># friends & badges</p>
	<p class="mt-2 text-sm">some badges and links to cool people, check them out!</p>

	<div class="mt-2 flex max-w-2xl flex-wrap gap-2">
		{#each staticImages as src}
			<img {src} alt="88x31 button" width="88" height="31" class="pixelated h-[31px] w-[88px]" />
		{/each}
		{#each nullptrRing as site}
			<a href={site.url} target="_blank" rel="noopener noreferrer">
				<img
					src={site.image}
					alt="Ring site button"
					width="88"
					height="31"
					class="pixelated h-[31px] w-[88px]"
				/>
			</a>
		{/each}
	</div>
</div>

<p class="max-w-2xl text-center text-sm text-gray-400">made with ♥ by ella</p>
