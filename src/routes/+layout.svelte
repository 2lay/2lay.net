<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-neutral-900 text-white">
	{@render children()}
</div>
