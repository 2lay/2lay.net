<template>
    <v-app class="hero">
      <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
          <v-card class="card-home card-style">
            <h1 class="text-h3 font-weight-bold">404 not found</h1>
            <p class="code-text">This page isn't here. Maybe it moved, or it never existed.</p>
            <v-btn @click="$router.go(-1)" color="primary">
              <span class="mdi mdi-arrow-left-bold"></span>&nbsp;Go back
            </v-btn>
            &nbsp; <!-- too lazy doing css -->
            <router-link to="/" tag="v-btn">
            <v-btn color="gray">
              <span class="mdi mdi-home-flood"></span>&nbsp;Go home
            </v-btn>
            </router-link>
          </v-card>
        </v-responsive>
      </v-container>
    </v-app>
</template>
  
<script>
useSeoMeta({
  title: '2lay.net - 404 not found',
  ogTitle: '2lay.net - 404 not found',
  description: "Uh oh, something went wrong. This page isn't here. Maybe it moved, or it never existed.",
  ogDescription: "Uh oh, something went wrong. This page isn't here. Maybe it moved, or it never existed.",
  themeColor: '#d754ff',
  twitterCard: 'summary_large_image',
})
</script>
  