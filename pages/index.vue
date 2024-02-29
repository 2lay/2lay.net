<template>
    <v-app class="img-bg">
        <v-container class="fill-height">
            <v-responsive class="align-center text-center fill-height">
                <v-card class="card-home card-custom">
                    <h1 class="text-h3 font-weight-bold shadow-animation">2lay.net</h1>
                    <p class="spacer">
                        Hiya I'm Ashley, check out the sidebar to learn more about me!
                        <br />
                    </p>
                    <v-img class="img-discord" src="https://discord.c99.nl/widget/theme-4/356867455303548929.png" />
                </v-card>
            </v-responsive>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref(null);
useSeoMeta({
    title: '2lay.net',
    ogTitle: '2lay.net',
    description:
        'Welcome to my website! I write code and some other stuff. Check out my website to learn more about me.',
    ogDescription:
        'Welcome to my website! I write code and some other stuff. Check out my website to learn more about me.',
    ogImage: 'https://2lay.net/blahaj.png',
    twitterCard: 'summary_large_image',
    themeColor: '#e6c3e2',
})
</script>
