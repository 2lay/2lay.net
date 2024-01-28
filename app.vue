<template>
  <v-app>
    <Mobile v-if="isMobile" />
    <AppBar v-else />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import AppBar from './layouts/AppBar.vue';
import Mobile from './layouts/Mobile.vue';

const isMobile = ref<boolean>(false);

const updateIsMobile = (): void => {
  isMobile.value = window.innerWidth <= 1280;
};

onMounted(() => {
  if (process.client) {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
  }
});

onUnmounted(() => {
 
  if (process.client) {
    window.removeEventListener('resize', updateIsMobile);
  }
});
</script>

<style>
.xd {
  box-sizing: border-box;
}

.nav {
  /* silly code */
  background-color: rgba(0, 0, 0, 0.527);
  border-radius: 10px;
  color: #ffffff;
  border-radius: 0px 15px 15px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  backdrop-filter: blur(4px);
}
.overlay-button {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
}
.card-style {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid #4e4e4e;
}

.custom-btn {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: #ffffff;
}

.card-style1 {
  background-color: rgba(0, 0, 0, 0);
}

.main,
.sidebar {
  border: 3px solid black;
  padding: 15px;
  background-color:#a35959;
}

.spacing {
  margin-bottom: 10px;
}

.rasd {
  background-color: rgba(87, 87, 87, 0);
}

.amg {
  background-color: rgba(87, 87, 87, 0.192);
}

.hero {
  background: url("https://i.imgur.com/lpGOQ7Z.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: relative;
}

.img {
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

.code-text {
  margin-top: 10px;
  color: #dedede;
  margin-bottom: 25px;
}

@keyframes shadowAnimation {
  0% {
    text-shadow: 3px 3px 0px rgb(180, 131, 139);
  }

  50% {
    text-shadow: -3px -3px 0px rgb(180, 131, 139);
  }

  100% {
    text-shadow: 3px 3px 0px rgb(180, 131, 139);
  }
}

.animated-text {
  animation: shadowAnimation 1.5s infinite;
}
</style>