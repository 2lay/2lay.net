<template>
    <v-app class="img-bg">
        <v-container class="fill-height">
            <v-responsive class="align-center fill-height">
                <headerCard style="margin-bottom: 20px" />
                <v-card class="mx-auto card-custom" max-width="500">
                    <v-tabs v-model="tab" align-tabs="center" color="hsl(var(--primary))"
                        style="background-color: rgba(87, 87, 87, 0.192)">
                        <v-tab value="aboutme"><span class="hover-animation">About me</span></v-tab>
                        <v-tab value="skills"><span class="hover-animation">Skills</span></v-tab>
                        <v-tab value="socials"><span class="hover-animation">Socials</span></v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="aboutme">
                                <v-card-text>
                                    <h2 style="margin-bottom: 15px">Hey there, I'm Ashley <span
                                            class="emoji emoji-trans" /></h2>

                                    <v-responsive class="align-center">
                                        <p>Hey there, I'm Ashley.<br>
                                            I'm a self-taught <strong>systems administrator</strong> and
                                            <strong>developer</strong> from Sweden. I'm
                                            passionate about <strong>Linux</strong> and
                                            <strong>open-source</strong> software. Besides that, I enjoy immersing
                                            myself in <strong>music</strong> and <strong>video games</strong>.
                                        </p>

                                        <p style="margin-top: 5px;">Need to reach out? Feel free to <strong>
                                                <NuxtLink to="/contact"
                                                    style="text-decoration: none; border-bottom: 2px dotted hsl(var(--primary)); color: inherit;">
                                                    <span class="hover-color">contact me</span>
                                                </NuxtLink>
                                            </strong>.</p>

                                        <h3 style="margin-bottom: 5px; margin-top: 15px;">Also, check out my cute
                                            friends!</h3>
                                        <div style="display: flex">
                                            <div v-for="item in friends">
                                                <v-list-item-content>
                                                    <v-btn icon rounded class="margrigh hover-animation" style="
                                                            width: 50px;
                                                            margin-top: 5px;
                                                            height: 50px;
                                                            border-radius: 50%;
                                                        " :href="'https://' + item.website">
                                                        <img :src="'https://github.com/' + item.username + '.png'"
                                                            alt="Image"
                                                            style="width: 100%; height: auto; border-radius: 50%" />
                                                        <v-tooltip class="tooltip-custom" activator="parent"
                                                            location="start">
                                                            {{ item.name }} ({{ item.website }})
                                                        </v-tooltip>

                                                    </v-btn>
                                                </v-list-item-content>
                                            </div>
                                        </div>
                                    </v-responsive>
                                </v-card-text>
                            </v-window-item>

                            <v-window-item value="skills">
                                <v-card-text>
                                    <h2>Skills</h2>
                                    <p style="margin-bottom: 15px; margin-top: 5px">
                                        Below are the programming languages and frameworks I am familiar with :)
                                    </p>

                                    <v-list-item v-for="(item, index) in skills" :key="index"
                                        class="hover-animation hover-color"
                                        :class="item.type === 'subheader' ? 'subheader' : ''">
                                        <v-list-item-content>
                                            <v-list-item-title v-if="item.type !== 'divider'">
                                                <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
                                                <template v-if="item.type === 'subheader'">
                                                    <strong>{{ item.title }}</strong>
                                                </template>
                                                <template v-else>
                                                    {{ item.title }}
                                                </template>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-card-text>
                            </v-window-item>

                            <v-window-item value="socials">
                                <v-card-text>
                                    <h2>My socials</h2>
                                    <br />
                                    <links />
                                </v-card-text>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-responsive>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref(null)

useSeoMeta({
    title: '2lay.net | About Me',
    ogTitle: '2lay.net | About Me',
    description: 'On this site, you can learn more about me and all the stuff that I have done.',
    ogDescription: 'On this site, you can learn more about me and all the stuff that I have done.',
    ogImage: 'https://2lay.net/avatar.png',
    twitterCard: 'summary_large_image',
    themeColor: '#e6c3e2',
})

const skills = ref([
    { type: 'subheader', title: 'Fluent in' },
    { title: 'Vue', value: 1, icon: 'mdi-vuejs' },
    { title: 'Python', value: 2, icon: 'mdi-language-python' },
    { type: 'subheader', title: 'Learning' },
    { title: 'Java/Typescript', value: 3, icon: 'mdi-language-typescript' },
    { title: 'Java', value: 5, icon: 'mdi-language-java' },
    { type: 'subheader', title: 'Willing to learn' },
    { title: 'Rust', value: 6, icon: 'mdi-language-rust' },
])

const friends = ref([{ name: 'kate', username: 'katelyynn', website: 'cutensilly.org' }])
</script>
