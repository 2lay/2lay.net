<template>
    <v-app class="hero">
        <v-container class="fill-height">
            <v-responsive class="align-center fill-height">
                <header-me style="margin-bottom: 20px" />
                <v-card class="mx-auto card-style" max-width="500">
                    <v-tabs v-model="tab" align-tabs="center" class="amg">
                        <v-tab value="aboutme">About me</v-tab>
                        <v-tab value="one">Skills</v-tab>
                        <v-tab value="two">Socials</v-tab>
                        <v-tab value="three">My work</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="aboutme">
                                <h2 class="title-newline">About me</h2>

                                <v-responsive class="align-center">
                                    Hey again! My name is Ashley and I'm a self taught developer from Sweden. I'm also
                                    very passionate about Linux
                                    <i>*i use arch btw*</i>
                                    . I also love listening to music! Need to contact me? Check out <strong>
                                        <NuxtLink to="/contact" style="text-decoration:none; color: inherit;">this
                                        </NuxtLink>
                                    </strong>.
                                    <br />
                                    <br />
                                    <h3>Also check out my cute friends!</h3>

                                    <div style="display: flex">
                                        <div v-for="item in friends">
                                            <v-list-item-content>
                                                <v-btn icon rounded class="rounded-button margright"
                                                    :href="'https://' + item.website">
                                                    <img :src="'https://github.com/' + item.username + '.png'" alt="Image"
                                                        class="button-image" />
                                                    <v-tooltip activator="parent" location="start">
                                                        {{ item.name }} ({{ item.website }})
                                                    </v-tooltip>
                                                </v-btn>
                                            </v-list-item-content>
                                        </div>
                                    </div>
                                </v-responsive>
                            </v-window-item>

                            <v-window-item value="one">
                                <h2 style="margin-bottom: 5px">My skills</h2>
                                <p class="title-newline">Here is a list of programming languages/frameworks I know</p>
                                <v-list class="rasd margintop">
                                    <v-list-item-group v-model="tab" class="custom-list-item-group">
                                        <v-list-item v-for="(item, index) in skills" :key="index"
                                            style="margin-top: -7px; margin-bottom: -7px"
                                            :class="item.type === 'subheader' ? 'subheader' : ''">
                                            <v-list-item-content>
                                                <v-list-item-title v-if="item.type !== 'divider'">
                                                    <v-icon v-if="item.icon">
                                                        {{ item.icon }}
                                                    </v-icon>
                                                    {{ item.title }}
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-window-item>

                            <v-window-item value="two">
                                <h2 style="margin-bottom: 5px">My socials</h2>
                                <p class="title-newline">
                                    Here are all of my social media profiles. Feel free to take a look!
                                </p>
                                <v-responsive class="align-center text-center">
                                    <links />
                                </v-responsive>
                            </v-window-item>

                            <v-window-item value="three">
                                <h2 class="title-newline">TMW.gg</h2>
                                <p>
                                    The Modded Warehouse is a modded Network providing everyone a high quality non pay
                                    to win gameplay.
                                </p>
                                <v-responsive class="align-center text-center">
                                    <br />
                                    <v-btn href="https://tmw.gg" class="text-center custom-btn spacing"
                                        style="background-color: rgba(223, 123, 238, 0.212); border: 1px solid #754e76">
                                        <span class="mdi mdi-open-in-new" />
                                        &nbsp;Go to
                                    </v-btn>
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
])

const friends = ref([
    {
        name: 'kate',
        username: 'katelyynn',
        website: 'cutensilly.org',
    },
])
</script>
<style scoped>
.rounded-button {
    width: 50px;
    margin-top: 5px;
    height: 50px;
    border-radius: 50%;
}

.title-newline {
    margin-bottom: 15px;
}

.margright {
    margin-right: 7px;
}

.margintop {
    margin-top: -15px;
}

.button-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
}
</style>
