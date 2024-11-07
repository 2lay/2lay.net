<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Styles from '../lib/styles.svelte';
</script>

<div>
	{@render children()}
</div>
