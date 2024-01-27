<template>
    <v-app class="hero">
        <v-container class="fill-height">
            <v-responsive class="align-center fill-height">
                <v-card class="mx-auto card-style" max-width="344" title='2lay' subtitle="she/her"
                    prepend-avatar="https://github.com/2lay.png"> <v-card-text>Heyy! I'm 2lay, I'm a self taught developer
                        from Sweden.
                    </v-card-text> </v-card>
                <br>
                <v-card class="mx-auto card-style" max-width="344">
                    <v-card-text>
                        <h2>My socials</h2>
                        <br>
                        <v-responsive class="align-center text-center">
                            <links />
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
    twitterCard: 'summary_large_image',
    themeColor: '#d754ff',
})

</script>
