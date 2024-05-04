<template>
  <v-app class="img-bg">
    <v-card
      class="relative mx-auto max-w-3xl overflow-hidden mt-10 py-8 px-6 sm:px-8 md:px-10 lg:px-12 shadow-lg card-custom-noanim">
      <nuxt-link class="block text-gray-400 hover:text-gray-700 transition-colors duration-300" href="/blog">
        <svg xmlns="http://www.w3.org/2000/svg" class="inline w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span class="text-sm">Back to Blog</span>
      </nuxt-link>
      <ContentDoc v-slot="{ doc }">
        <h1 class="mt-4 mb-6 text-3xl md:text-4xl font-semibold text-white-900">{{ doc.doctitle }}</h1>
        <div class="flex items-center text-white-600 mb-4">
          <img :src="`https://github.com/${doc.author.name}.png`" alt="Author Avatar"
            class="w-10 h-10 rounded-full mr-3">
          <div>
            <p class="text-sm font-medium">{{ doc.author.name }}</p>
            <time :datetime="doc.date" class="text-xs">{{ new Date(doc.time * 1000).toLocaleDateString('en-US', {
              day:
              'numeric', month: 'long', year: 'numeric' }) }}</time>
          </div>
        </div>
        <hr class="my-8 border-gray-700">
        <div class="prose prose-lg dark:prose-invert">
          <ContentRenderer :value="doc" />
        </div>
      </ContentDoc>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('my-page', queryContent('/').findOne)

useContentHead(page)
</script>