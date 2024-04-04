<template>
    <v-app>
        <NuxtLayout>
            <MainView />
        </NuxtLayout>
    </v-app>
</template>

<script setup lang="ts">
import MainView from './layouts/mainView.vue'
</script>

<style>

:root {
        --primary-h: 307;
        --primary-s: 41%;
        --primary-l: 83%;
    
        --danger-h: 0;
        --danger-s: 100%;

        --info-h: 206;
    
        --primary: var(--primary-h), var(--primary-s), var(--primary-l);
        --darker-primary: var(--primary-h), calc(var(--primary-s) - 30%), calc(var(--primary-l) - 40%);
    
        --danger: var(--danger-h), var(--danger-s), var(--primary-l);
        --info: var(--info-h), var(--primary-s), var(--primary-l);
    
        --border: hsla(0, 0%, 31%, 1);
        --card: hsla(0, 0%, 0%, 0.7);
}

/* navigation */

.nav {
    color: white;
    background-color: var(--card);
    box-shadow: 0 0 10px var(--card);
    backdrop-filter: blur(4px);
    border-color: var(--border);
    border-radius: 0px 15px 15px 0px;
}

.nav-mobile-btn {
    color: white;
    background-color: var(--card);
    box-shadow: 0 0 10px var(--card);
    border: 1px solid var(--border);
    margin: 16px;
    z-index: 1000;
    position: fixed;
}

/* card */

.card-custom {
    color: #ffffff;
    background-color: var(--card);
    box-shadow: 0 0 10px var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.card-custom:hover {
    transform: scale(1.02);
}

.card-home {
    padding: 25px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
}

/* button */

.btn-custom {
    box-shadow: 0 0 10px var(--card);
    border-radius: 10px;
    color: white;
}

.btn-hover:hover {
    transform: scale(1.05);
}

.btn-spacing {
    margin-bottom: 10px;
}

/* tooltip */

.tooltip-custom>.v-overlay__content {
    color: #ffffff;
        background-color: var(--card);
        box-shadow: 0 0 10px var(--card);
        border: 1px solid var(--border);
        border-radius: 10px;
        transition: transform 0.3s ease;
}

/* snackbar */

.snackbar-custom>.v-overlay__content {
    color: #ffffff;
    background-color: var(--card);
    box-shadow: 0 0 10px var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;

}
/* image */

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

/* vuetify overrides */

.v-responsive {
    overflow: visible;
}

/* other */

.spacer {
    margin-top: 10px;
    color: white;
    margin-bottom: 25px;
}

/* animations */

.hover-animation:hover {
    transform: scale(1.05);
    overflow: visible;
}

.hover-animation {
    transition: transform .5s ease;
}

@keyframes shadowAnimation {
    0% {
        text-shadow: 3px 3px 0px hsl(var(--primary)), 5px 5px 8px hsl(var(--darker-primary));
    }

    25% {
        text-shadow: -3px -3px 0px hsl(var(--primary)), -5px -5px 8px hsl(var(--darker-primary));
    }

    50% {
        text-shadow: -3px -3px 0px hsl(var(--primary)), -5px -5px 8px hsl(var(--darker-primary));
    }

    75% {
        text-shadow: 3px 3px 0px hsl(var(--primary)), 5px 5px 8px hsl(var(--darker-primary));
    }

    100% {
        text-shadow: 3px 3px 0px hsl(var(--primary)), 5px 5px 8px hsl(var(--darker-primary));
    }
}

.shadow-animation {
    animation: shadowAnimation 3s infinite ease-out;
}

/* emojis */

.emoji {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    background-size: contain;
}

.emoji-trans {
    background-image: url('/emojis/trans_flag.png');
}

</style>
