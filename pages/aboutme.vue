<template>
  <v-app class="hero">
    <v-container class="fill-height">
      <v-responsive class="align-center fill-height">
       <header-me />
        <br>
        <v-card class="mx-auto card-style" max-width="344">
          <v-tabs align-tabs="center" v-model="tab" class="amg">
            <v-tab value="one">Skills</v-tab>
            <v-tab value="two">Socials</v-tab>
            <v-tab value="three">My work</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-list class="rasd">
                  <v-list-item-group v-model="tab" class="custom-list-item-group">
                    <v-list-item style="margin-top: -7px; margin-bottom: -7px;" v-for="(item, index) in skills"
                      :key="index" :class="item.type === 'subheader' ? 'subheader' : ''">
                      <v-list-item-content>
                        <v-list-item-title v-if="item.type !== 'divider'">
                          <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-window-item>


              <v-window-item value="two">
                <h2>My socials</h2>
                <br>
                <v-responsive class="align-center text-center">
                  <links />
                </v-responsive>
              </v-window-item>


              <v-window-item value="three">
                <h2>TMW.gg</h2>
                <br />
                <p>
                  The Modded Warehouse is a modded Network providing everyone a
                  high quality non pay to win gameplay.
                </p>
                <v-responsive class="align-center text-center">
                  <v-btn href="https://tmw.gg" class="text-center" color="primary"><span
                      class="mdi mdi-open-in-new"></span>&nbsp;Go to</v-btn>
                </v-responsive>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-responsive>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref(null);
useSeoMeta({
  title: '2lay.net | About Me',
  ogTitle: '2lay.net | About Me',
  description: 'On this site, you can learn more about me and all the stuff that I have done.',
  ogDescription: 'On this site, you can learn more about me and all the stuff that I have done.',
  twitterCard: 'summary_large_image',
  themeColor: '#d754ff',
})
const skills = ref([
  { type: 'subheader', title: 'Fluent in' },
  {
    title: 'Vue',
    value: 1,
    icon: 'mdi-vuejs',
  },
  {
    title: 'Python',
    value: 2,
    icon: 'mdi-language-python',
  },
  { type: 'subheader', title: 'Learning' },
  {
    title: 'Java/Typescript',
    value: 3,
    icon: 'mdi-language-typescript',
  },
  {
    title: 'Java',
    value: 5,
    icon: 'mdi-language-java',
  },
  { type: 'subheader', title: 'Willing to learning' },
  {
    title: 'Minecraft Datapacks',
    value: 6,
    icon: 'mdi-minecraft',
  },
]);
</script>

