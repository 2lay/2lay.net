<template>
    <v-app>
        <SideBar v-if="notMobile" />
        <MobileSideBar v-else />
    </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import SideBar from './layouts/SideBar.vue'
import MobileSideBar from './layouts/MobileSideBar.vue'

const notMobile = ref<boolean>(true)

const updateNotMobile = (): void => {
    notMobile.value = window.innerWidth >= 1280
}

onMounted(() => {
    if (process.client) {
        updateNotMobile()
        window.addEventListener('resize', updateNotMobile)
    }
})

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('resize', updateNotMobile)
    }
})
</script>

<style>
.v-responsive {
    overflow: visible;
}

.nav {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    color: #ffffff;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: sticky;
    top: 0;
    backdrop-filter: blur(4px);
}

.nav-mobile-btn {
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 1px solid #4e4e4e;
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 1000;
}

.card-custom {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 1px solid #4e4e4e;
}

.card-custom {
    transition: transform 0.3s ease;
}

.card-custom:hover {
    transform: scale(1.02);
}

.btn-custom {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #ffffff;
}

.btn-hover:hover {
    transform: scale(1.05);
}

.btn-spacing {
    margin-bottom: 10px;
}

.img-bg {
    background: url('/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: relative;
}

.img-discord {
    margin: auto;
    width: 70%;
    background-repeat: no-repeat;
    border-radius: 2px;
}

.card-home {
    padding: 25px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
}

.spacer {
    margin-top: 10px;
    color: #dedede;
    margin-bottom: 25px;
}

@keyframes shadowAnimation {
    0% {
        text-shadow: 3px 3px 0px rgb(230, 195, 226), 5px 5px 8px rgb(133, 111, 132);
    }

    25% {
        text-shadow: -3px -3px 0px rgb(230, 195, 226), -5px -5px 8px rgb(133, 111, 132);
    }

    50% {
        text-shadow: -3px -3px 0px rgb(230, 195, 226), -5px -5px 8px rgb(133, 111, 132);
    }

    75% {
        text-shadow: 3px 3px 0px rgb(230, 195, 226), 5px 5px 8px rgb(133, 111, 132);
    }

    100% {
        text-shadow: 3px 3px 0px rgb(230, 195, 226), 5px 5px 8px rgb(133, 111, 132);
    }
}

.shadow-animation {
    animation: shadowAnimation 3s infinite ease-out;
}
</style>
