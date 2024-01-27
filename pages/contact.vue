<template>
  <v-app class="hero">
    <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <v-card class="card-home card-style">
          <h1 class="text-h3 font-weight-bold animated-text">Contact me</h1>
          <p class="code-text">
            Have a question? Feel free to reach out!<br />You can email me at
            <strong>mail@2lay.net</strong><br />You can also message me on
            Discord at <strong>2lay</strong>
          </p>
        </v-card>
      </v-responsive>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '2lay.net | Contact',
  ogTitle: '2lay.net | Contact',
  description: 'Need to contact me? Here are all the ways you can reach me.',
  ogDescription: 'Need to contact me? Here are all the ways you can reach me.',
  twitterCard: 'summary_large_image',
  themeColor: '#d754ff',
})
</script>
