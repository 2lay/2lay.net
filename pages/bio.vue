<template>
    <v-app class="img-bg">
        <v-container class="fill-height">
            <v-responsive class="align-center fill-height">
                <headerCard style="margin-bottom: 20px" />
                <v-card class="mx-auto card-custom" max-width=500>
                    <v-card-text>
                        <h2>My socials</h2>
                        <br />
                        <v-responsive class="align-center text-center">
                            <links />
                            <v-btn block to="/" class="text-center btn-custom btn-spacing"
                                style="background-color: rgba(123, 177, 238, 0.212); border: 1px solid #4e6376">
                                <span />
                                <span class="mdi mdi-web" />
                                &nbsp;Main website
                            </v-btn>
                        </v-responsive>
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
    title: '2lay.net | Bio',
    ogTitle: '2lay.net | Bio',
    description: 'My bio page :3',
    ogDescription: 'My bio page :3',
    ogImage: 'https://2lay.net/blahaj.png',
    twitterCard: 'summary_large_image',
    themeColor: '#d754ff',
})
</script>
