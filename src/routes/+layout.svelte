<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import '@fontsource-variable/jetbrains-mono';
	import Neko from '$lib/neko/Neko.svelte';
</script>

<div>
	<Neko />
	{@render children()}
</div>
