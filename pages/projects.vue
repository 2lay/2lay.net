<template>
    <div>
        <h1>
            <img src="https://github.com/2lay.png" class="hide-mobile avatar" />
            My <span class="title-highlight">Projects</span>.
        </h1>
        <p>
            Welcome to my
            <span style="color: #6aaee6; text-shadow: 1px 0 10px #6aaee6">projects</span>
            page! Here is a big list of all the projects that I have worked on.
        </p>

        <div v-for="(contact, index) in contactLinks" :key="index">
            <h2 :href="contact.link" class="entry"
                :style="{ color: contact.color, 'text-shadow': '1px 0 10px ' + contact.color }">
                <span class="hover-color">{{ contact.name }}</span>
            </h2>
            <hr :style="{ color: contact.color }" />

            <p>{{ contact.description }}</p>
            <div class="container">
                <a :href="contact.link" class="button"
                    :style="{ 'border-color': contact.color, 'background-color:hover': contact.color }">go to</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const tab = ref(null);
useSeoMeta({
    title: '2lay.net - projects',
    ogTitle: '2lay.net - projects',
    description: 'here are the projects i work on',
    ogDescription: 'here are the projects i work on',
    ogImage: 'https://github.com/2lay.png',
    twitterCard: 'summary_large_image',
    themeColor: '#f5a9b8',
})
</script>

<script lang="ts">
export default {
    data() {
        return {
            contactLinks: [
                {
                    link: "https://tmw.gg/",
                    color: "#e183d9",
                    name: "TMW.gg",
                    description: "Modded Minecraft server network, served over 1000 unique players since 2022"
                },


            ]
        };
    },
    methods: {
        copyToClipboard(text) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    this.discordLinkText = "> Copied username to clipboard!";
                    setTimeout(() => {
                        this.discordLinkText = "> Discord";
                    }, 4000);
                })

        }
    }
};
</script>

<style scoped>
.container {
    text-align: center;
}

.button {
    display: inline-block;

    text-align: center;
    background-color: transparent;
    text-decoration-style: dotted;

    text-decoration: none;
    border-bottom: 2px dotted;
}

.entry {
    text-decoration: none;
    display: inline-block;
    margin-bottom: 10px;
}


</style>