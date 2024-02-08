<template>
    <v-app class="hero">
        <v-container class="fill-height">
            <v-responsive class="align-center fill-height">
                <header-me />
                <br />
                <v-card class="mx-auto card-style" max-width="344">
                    <v-card-text>
                        <h2>My socials</h2>
                        <br />
                        <v-responsive class="align-center text-center">
                            <links />
                            <v-btn
                                block
                                to="/"
                                class="text-center custom-btn spacing"
                                style="background-color: rgba(123, 177, 238, 0.212); border: 1px solid #4e6376"
                            >
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
useSeoMeta({
    title: '2lay.net | Bio',
    ogTitle: '2lay.net | Bio',
    description: 'My bio page :3',
    ogDescription: 'My bio page :3',
    twitterCard: 'summary_large_image',
    themeColor: '#d754ff',
})
</script>
