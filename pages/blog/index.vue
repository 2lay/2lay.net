<template>
  <main>
    <v-app class="img-bg">
      <v-container style="margin-top: 50px;">
        <v-responsive class="align-center text-center fill-height">
          <v-card class="card-home card-custom card-hover">
            <h1 class="text-h3 font-weight-bold shadow-animation">Blog</h1>
            <p class="">
              Welcome to my blog page! Here are sme of my latest articles and
              posts.
            </p>
          </v-card>
        </v-responsive>
      </v-container>
      <v-container>
        <ContentList path="/blog" v-slot="{ list }">
          <div v-for="(article, index) in sortedList(list).slice(minIndex, maxIndex)" :key="article._path">
            <v-row no-gutters class="align-end justify-center">
              <NuxtLink :to="article._path + '/'" class="block relative" style="text-decoration: none">
                <v-card class="card-custom" :image="article.img" style="
                        margin-bottom: 20px; 
                        min-width: 500px;
                        max-width: 500px;
                        max-height: 200px;
                        padding: 15px;
                    ">

                  <v-row no-gutters>
                    <v-col cols="9">
                      <div>
                        <v-text class="text-h5 font-weight-bold">
                          {{ article.doctitle }}
                        </v-text>
                        <br />
                        <v-text class="text-higih-emphasis text-body-2">{{
                          article.description
                          }}</v-text>
                      </div>
                    </v-col>
                  </v-row>
                  <div class="text-right">
                    <p class="mb-1 mr-2 text-disabled text-caption">
                      {{ new Date(article.time * 1000).toLocaleDateString('en-US', {
                      day:
                      'numeric', month: 'long', year: 'numeric' }) }}
                    </p>
                  </div>
                </v-card>
              </NuxtLink>
            </v-row>
          </div>
        </ContentList>
        <div class="text-center">
          <v-pagination v-model="page" :length="3" :total-visible="7"></v-pagination>
        </div>
      </v-container>
    </v-app>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref(null)

useSeoMeta({
  title: '2lay.net | Blog',
  ogTitle: '2lay.net | Blog',
  description: 'Here are some of my latest articles and posts.',
  ogDescription: 'Here are some of my latest articles and posts.',
  ogImage: 'https://2lay.net/avatar.png',
  twitterCard: 'summary_large_image',
  themeColor: '#e6c3e2',
})
</script>

<script lang="ts">
export default {
  data() {
    return {
      limit: 6,
      page: 1,
    }
  },
  computed: {
    minIndex() {
      return (this.page - 1) * this.limit
    },
    maxIndex() {
      return this.page * this.limit
    },
  },
  methods: {
    sortedList(list) {
      return list.slice().sort((a, b) => b.time - a.time)
    },
  },
}



</script>
