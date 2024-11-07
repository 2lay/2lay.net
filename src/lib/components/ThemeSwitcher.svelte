<script>
  import { Sun, Moon } from 'lucide-svelte';
  import { browser } from '$app/environment';

  let isDarkMode = false;

  function toggle() {
    if (browser) {
      document.body.classList.toggle('dark');
      isDarkMode = !isDarkMode;
    }
  }
</script>

<button 
  class="text-neutral-50 dark:text-neutral-900" 
  on:click={toggle} 
  aria-label="Toggle dark mode">
  {#if isDarkMode}
    <Moon class="w-6 h-6" />
  {:else}
    <Sun class="w-6 h-6" />
  {/if}
</button>
