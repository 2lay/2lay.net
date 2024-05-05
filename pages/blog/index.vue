<template>
  <main>
    <v-app class="img-bg">
      <v-container class="mt-10">
        <v-responsive class="text-center ">
          <v-card class="card-home card-custom card-hover">
            <h1 class="text-h3 font-weight-bold shadow-animation">Blog</h1>
            <p class="mt-1">
              Welcome to my blog page! Here are some of my latest articles and
              posts.
            </p>
          </v-card>
        </v-responsive>
      </v-container>
      <v-container>
        <ContentList path="/blog" v-slot="{ list }">
          <v-card v-for="(article, index) in sortedList(list).slice(minIndex, maxIndex)" :key="article._path"
            class="card-custom card-home" :image="article.img">
            <NuxtLink :to="article._path + '/'">
              <v-row no-gutters>
                <v-col cols="9">
                  <div>
                    <v-text class="text-h5 font-weight-bold">
                      {{ article.doctitle }}
                    </v-text>
                    <br />
                    <v-text class="text-body-2 text-higih-emphasis">{{
                      article.description
                      }}</v-text>
                  </div>
                </v-col>
              </v-row>
              <div class="text-right">
                <p class="mr-2 text-caption text-disabled">
                  {{ new Date(article.time * 1000).toLocaleDateString('en-UK', {
                  day:
                  'numeric', month: 'long', year: 'numeric' }) }}
                </p>
              </div>
            </NuxtLink>
          </v-card>
        </ContentList>
        <div class="text-center">
          <v-pagination v-model="page" :length="pages" :total-visible="7" class="mt-5"></v-pagination>

        </div>
      </v-container>
    </v-app>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const count = await queryContent('blog').count();
const dividedCount = Math.ceil(count / 6);
const adjustedCount = dividedCount > 3 ? 3 : dividedCount;

const pages = adjustedCount;

console.log(count)

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
