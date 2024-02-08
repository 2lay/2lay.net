<template>
    <v-app class="hero">
        <v-container class="fill-height">
            <v-responsive class="align-center text-center fill-height">
                <v-card class="card-home card-style">
                    <h1 class="text-h3 font-weight-bold animated-text">Contact me</h1>
                    <p class="code-text">
                        Have a question? Feel free to reach out!
                        <br />
                        You can email me at
                        <strong>mail@2lay.net</strong>
                        <br />
                        You can also message me on Discord at
                        <strong>2lay</strong>
                    </p>

                    <v-btn
                        href="mailto:mail@2lay.net"
                        class="text-center custom-btn spacing"
                        style="background-color: rgba(77, 77, 77, 0.212); border: 1px solid #3c3c3c"
                    >
                        <span />
                        <span class="mdi mdi-email" />
                        &nbsp;Mail
                    </v-btn>
                    &nbsp;

                    <v-btn
                        href="https://discord.com/users/356867455303548929"
                        target="_blank"
                        class="text-center custom-btn spacing"
                        style="background-color: rgba(123, 148, 238, 0.212); border: 1px solid #4e5776"
                    >
                        <span />
                        <font-awesome-icon icon="fa-brands fa-discord" />
                        &nbsp;Discord

                        <discord-broken />
                    </v-btn>
                </v-card>
            </v-responsive>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref(null);
useSeoMeta({
    title: '2lay.net | Contact',
    ogTitle: '2lay.net | Contact',
    description: 'Need to contact me? Here are all the ways you can reach me.',
    ogDescription: 'Need to contact me? Here are all the ways you can reach me.',
    twitterCard: 'summary_large_image',
    themeColor: '#d754ff',
})
</script>
