<script>
    import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
    import { House } from 'lucide-svelte';
  </script>
  
  <div
    id="nav"
    class="flex items-center justify-between dark:text-neutral-50 text-neutral-900 px-20 pt-7 fixed top-0 left-0 w-full z-10"
  >
    <div id="nav-left">
      <p class="text-bold text-3xl font-bold"><span class="text-pink-400">2lay.net</span></p>
    </div>
    <div id="nav-right" class="flex flex-row space-x-4">
      <a href="https://google.com" class="flex duration-150 dark:hover:text-pink-100 dark:hover:bg-pink-300/20 dark:hover:shadow-pink-200 hover:text-pink-600 hover:bg-pink-50 hover:shadow-pink-100 px-2.5 py-1.5 rounded-lg">
        <p>Home</p>
      </a>
      <a href="https://google.com" class="flex duration-150 dark:hover:text-pink-100 dark:hover:bg-pink-300/20 dark:hover:shadow-pink-200 hover:text-pink-600 hover:bg-pink-50 hover:shadow-pink-100 px-2.5 py-1.5 rounded-lg">
        <p>Portfolio</p>
      </a>
      <a href="https://google.com" class="flex duration-150 dark:hover:text-pink-100 dark:hover:bg-pink-300/20 dark:hover:shadow-pink-200 hover:text-pink-600 hover:bg-pink-50 hover:shadow-pink-100 px-2.5 py-1.5 rounded-lg">
        <p>Contact</p>
      </a>
    </div>
    <div>
      <ThemeSwitcher />
    </div>
  </div>
  
