<template>
  <v-app class="hero">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <v-card class="card-home card-style">
          <h1 class="text-h3 font-weight-bold animated-text">2lay.net</h1>
          <p class="code-text">
            I write code, check out the sidebar to learn more about me!<br />
          </p>
          <v-img class="img" src="https://discord.c99.nl/widget/theme-4/356867455303548929.png"></v-img>
        </v-card>
      </v-responsive>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">

useSeoMeta({
  title: '2lay.net',
  ogTitle: '2lay.net',
  description: 'Welcome to my website! I write code and some other stuff. Check out my website to learn more about me.',
  ogDescription: 'Welcome to my website! I write code and some other stuff. Check out my website to learn more about me.',
  twitterCard: 'summary_large_image',
  themeColor: '#d754ff',
})
</script>

