<template>
  <div>
    <h1 id="">
      <img src="https://github.com/2lay.png" alt="Avatar" class="hide-mobile avatar">
      Hey, I'm <span class="title-highlight">Ashley</span>.
    </h1>
    <p>
      I'm a self-taught <span style="color: #c1ebc0; text-shadow: 1px 0 10px #c1ebc0 ">systems administrator</span> and <span style="color: #c1ebc0; text-shadow: 1px 0 10px #c1ebc0">developer</span> from <span style="color: #fafabe; text-shadow: 1px 0 10px #fafabe">Sweden</span>! I'm
      passionate about <span style="color: #f09ea7; text-shadow: 1px 0 10px #f09ea7">Linux</span> and <span style="color: #f09ea7; text-shadow: 1px 0 10px #f09ea7">open-source stuff</span>. Besides that, I enjoy immersing
      myself in <span style="color: #c7caff; text-shadow: 1px 0 10px #c7caff">music</span> and <span style="color: #c7caff; text-shadow: 1px 0 10px #c7caff">video games</span>. I also love coding in <span
        style="color: #f89922; text-shadow: 1px 0 10px #f89922 ">Java</span>,
      <span style="color: #8271e4; text-shadow: 1px 0 10px #8271e4 ">Kotlin</span>, <span
        style="color: #6aaee6; text-shadow: 1px 0 10px #6aaee6 ">Python</span>, <span
        style="color: #f7e025; text-shadow: 1px 0 10px #f7e025 ">Javascript</span>, <span
        style="color: #3881d1; text-shadow: 1px 0 10px #3881d1 ">Typescript</span> and <span
        style="color: #1570bf; text-shadow: 1px 0 10px #1570bf ">C++</span>.
      <br /><br />
      You'll find me all over the web:
    </p>
    <a href="javascript:void(0)" class="entry" style="color: #5865f2; text-shadow: 1px 0 10px #5865f2 "
      @click="copyToClipboard('2lay')">
      <span class="hover-color">{{ discordLinkText }}</span>
    </a>
    <div v-for="(contact, index) in contactLinks" :key="index">
      <a :href="contact.link" class="entry"
        :style="{ color: contact.color, 'text-shadow': '1px 0 10px ' + contact.color }">
        <span class="hover-color">> {{ contact.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref(null);
useSeoMeta({
    title: '2lay.net',
    ogTitle: '2lay.net',
    description: 'hey there! welcome to my website',
    ogDescription: 'hey there! welcome to my website',
    ogImage: 'https://github.com/2lay.png',
    twitterCard: 'summary_large_image',
    themeColor: '#f5a9b8',
})
</script>

<script lang="ts">
export default {
  data(): { discordLinkText: string, contactLinks: { link: string, color: string, name: string }[] } {
    return {
      discordLinkText: "> Discord",
      contactLinks: [
        {
          link: "mailto:someone@example.com",
          color: "#e183d9",
          name: "mail@2lay.net"
        },
        {
          link: "https://www.last.fm/user/twolay",
          color: "#f54c54",
          name: "Last.fm"
        },
        {
          link: "https://github.com/2lay",
          color: "#e6edf3",
          name: "Github"
        },
        {
          link: "https://youtube.com/@2lay",
          color: "#f23d3d",
          name: "YouTube"
        },
        {
          link: "https://steamcommunity.com/id/2lay",
          color: "#4ab3ff",
          name: "Steam"
        },
        {
          link: "https://modrinth.com/user/2lay",
          color: "#19ca63",
          name: "Modrinth"
        },
        {
          link: "https://www.curseforge.com/members/2lay",
          color: "#f0774f",
          name: "Curseforge"
        },
        {
          link: "https://en.pronouns.page/@2lay",
          color: "#ff95bb",
          name: "Pronouns.page"
        }
      ]
    };
  },
  methods: {
    copyToClipboard(text: string): void {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.discordLinkText = "> Copied username to clipboard!";
          setTimeout(() => {
            this.discordLinkText = "> Discord";
          }, 4000);
        });
    }
  }
};

</script>

<style>
.entry {
  text-decoration: none;
  display: inline-block;
  margin-bottom: 10px;
}

</style>
