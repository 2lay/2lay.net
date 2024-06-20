<template>
    <div>
        <h1>
            <img src="https://github.com/2lay.png" class="hide-mobile avatar" />
            my <span class="title-highlight">projects</span>
        </h1>
        <p>
            Welcome to my
            <span style="color: #6aaee6; text-shadow: 1px 0 10px #6aaee6">projects</span>
            page! Here is a big list of all the projects that I have worked on.
        </p>

        <div v-for="(project, index) in projects" :key="index">
            <h2 :href="project.link" class="entry"
                :style="{ color: project.color, 'text-shadow': '1px 0 10px ' + project.color }">
                <span class="hover-color">{{ project.name }}</span>
            </h2>
            <hr :style="{ color: project.color }" />

            <p>{{ project.description }}</p>
            <div class="container" style="display: flex;">
                <a :href="project.link" class="button" :style="getStyle(project.color)">go to</a>
                <a v-if="project.src" :href="project.src" class="button" :style="getStyle(project.color)">source</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const tab = ref(null);

useSeoMeta({
    title: '2lay.net - projects',
    ogTitle: '2lay.net - projects',
    description: 'here are the projects i work on',
    ogDescription: 'here are the projects i work on',
    ogImage: 'https://github.com/2lay.png',
    twitterCard: 'summary_large_image',
    themeColor: '#f5a9b8',
});

const projects = ref([
    {
        link: "https://tmw.gg/",
        color: "#eaa64b",
        name: "tmw.gg",
        description: "Modded Minecraft server network, served over 1000 unique players since 2022"
    },
    {
        link: "https://mctools.net/",
        src: "https://github.com/2lay/mctools.net",
        color: "#e183d9",
        name: "mctools.net",
        description: "A work-in-progress website offering a variety of neat tools for Minecraft."
    },
]);

const getStyle = (color: string) => {
    return {
        'border-color': color,
        '--hover-color': color
    };
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 10px;
}

a {
    position: relative;
    color: white;
    overflow: hidden;
    border: solid 2px;
    padding: 2px;
}

a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: var(--hover-color);
    transition: left 0.5s;
    z-index: -1;
}

a:hover::before {
    left: 0;
}

.button {
    display: inline-block;
    text-align: center;
    background-color: transparent;
    text-decoration-style: dotted;
    text-decoration: none;

}

.entry {
    text-decoration: none;
    display: inline-block;
    margin-bottom: 10px;
}
</style>
