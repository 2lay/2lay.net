<template>
    <v-app class="img-bg">
        <v-container class="fill-height">
            <v-responsive class="align-center text-center fill-height">
                <v-card class="card-home card-custom">
                    <h1 class="text-h3 font-weight-bold shadow-animation">Contact me</h1>
                    <p class="spacer">
                        Have a question? Feel free to reach out!
                        <br />
                        You can email me at
                        <strong>mail@2lay.net</strong>
                        <br />
                        You can also message me on Discord at
                        <strong>2lay</strong>
                    </p>

                    <v-btn href="mailto:mail@2lay.net" class="text-center btn-custom btn-spacing btn-hover"
                        style="background-color: hsl(var(--primary), 0.2);;  border: 1px solid hsl(var(--primary), 0.4)">
                        <span />
                        <span class="mdi mdi-email" />
                        &nbsp;Mail
                    </v-btn>
                    &nbsp;

                    <v-btn @click="snackbar = true, copyclipboard('2lay')" target="_blank"
                        class="text-center btn-custom btn-spacing btn-hover"
                        style="background-color: rgba(86, 96, 234, 0.212); border: 1px solid rgba(86, 96, 234, 0.412)">
                        <span />
                        <font-awesome-icon icon="fa-brands fa-discord" />
                        &nbsp;Discord
                    </v-btn>

                    <v-snackbar class="snackbar-style" v-model="snackbar" color="rgba(0, 0, 0, 0.7)"
                        border="1px solid #4e4e4e">
                        <div style="color: white;">{{ text }}</div>

                        <template v-slot:actions>
                            <v-btn color="primary" variant="tonal" @click="snackbar = false">
                                Close
                            </v-btn>
                        </template>
                    </v-snackbar>
                </v-card>
            </v-responsive>
        </v-container>
    </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tab = ref(null);

const copyclipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

const snackbar = ref(false);
const text = 'Copied username to clipboard.';

useSeoMeta({
    title: '2lay.net | Contact',
    ogTitle: '2lay.net | Contact',
    description: 'Need to contact me? Here are all the ways you can reach me.',
    ogDescription: 'Need to contact me? Here are all the ways you can reach me.',
    ogImage: 'https://2lay.net/blahaj.png',
    twitterCard: 'summary_large_image',
    themeColor: '#e6c3e2',
});
</script>
