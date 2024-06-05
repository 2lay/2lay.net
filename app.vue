<template>
  <div style="display: contents">
    <div class="h-screen flex sm:flex-row sm:justify-center overflow-y-auto">
      <main style="margin-top:auto;margin-bottom:auto">
        <div style="display: flex; align-items: center;">
          <div class="hide-desktop ani-nav-fadein">
            <a class="nav-link" style="margin-right: 10px;"><img src="https://github.com/2lay.png" alt="Avatar"
                class="hide-desktop avatar-small">2lay.net |</a>
            <nuxt-link :to="{ path: '/' }" :class="{ 'active': $route.path === '/' }" style="margin-right:10px;"
              class="text-deco nav-link">whoami</nuxt-link>
            <nuxt-link :to="{ path: '/projects' }" :class="{ 'active': $route.path === '/projects' }"
              style="margin-right:10px;" class="text-deco nav-link">projects</nuxt-link>
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between;" class="hide-mobile">
          <transition name="fade">
            <p v-if="showConsoleText" class="ani-typing typing-animation" style="color:#4E4E4E">{{ getPageTitle }}</p>
          </transition>
          <div style="display: flex; align-items: center;" class="ani-nav-fadein">
            <nuxt-link to="/" :class="{ 'active': $route.path === '/' }" style="margin-right:10px;"
              class="text-deco nav-link">whoami</nuxt-link>
            <nuxt-link to="/projects" :class="{ 'active': $route.path === '/projects' }" style="margin-right:10px;"
              class="text-deco nav-link">projects</nuxt-link>
          </div>
        </div>
        <transition v-if="showConsoleText" name="fade">
          <div class="ani-fadein">
            <NuxtPage :key="$route.fullPath" />
          </div>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YourComponentName',
  data() {
    return {
      showConsoleText: true
    };
  },
  computed: {
    getPageTitle() {
      if (this.$route.name === 'index') {
        return '[ashley@2lay.net ~] whoami';
      } else if (this.$route.name === 'projects') {
        return '[ashley@2lay.net ~] ls projects';
      } else {
        return `[ashley@2lay.net ~] cat ${String(this.$route.name)}.vue`;
      }
    }
  },
  watch: {
    '$route'() {
      this.showConsoleText = false;
      setTimeout(() => {
        this.showConsoleText = true;
      }, 0);
    }
  }
}
</script>
<style>

.avatar-small {
  max-height: 1.5em;
  vertical-align: middle;
  display: inline-block;
  line-height: 1;
  border-radius: 6px;
  margin-right: 5px;
  pointer-events: none;
}

.avatar {
  max-height: 1.8em; 
  vertical-align: middle; 
  border-radius: 15px;
  display: inline-block;
  line-height: 1; 
  pointer-events: none;
}


</style>

<style>
/* fonts! */

@font-face {
  font-family: JetBrains Mono;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OVgaY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

@font-face {
  font-family: JetBrains Mono;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTPlOVgaY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: JetBrains Mono;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOVOVgaY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}

@font-face {
  font-family: JetBrains Mono;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNVOVgaY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
    U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

@font-face {
  font-family: JetBrains Mono;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTNFOVgaY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020,
    U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: JetBrains Mono;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304,
    U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF,
    U+FFFD;
}

/* base styling */
body {
  background: #1f1f1f url('/noise.png');
  box-sizing: border-box;
  pointer-events: none;
}

body * {
  pointer-events: auto;
}

h1 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700 !important;
  color: #f1f1f1;
}

h2 {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  font-weight: 700 !important;
  color: #f1f1f1;
}

p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem !important;
  font-weight: 100 !important;
  color: #e1e1e1;
}

p strong {
  font-weight: 700 !important;
  color: #ffffff;
}

a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem !important;
  font-weight: 100 !important;
  color: #e1e1e1;
}

p,
h1,
h2,
ul,
li,
a {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

main {
  margin: auto;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  max-width: 600px;
}

main * {
  max-width: 100%;
  box-sizing: border-box;
}

.text-deco {
  text-decoration: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* haha funny */
  z-index: 9999;
}

/* nav links */

.nav-link {
  transition: all 0.3s ease;
  color: #4e4e4e;
}

.nav-link:hover {
  text-shadow: 0 0 20px #ffd1da;
  color: #ffd1da !important;
}

.nav-link.active {
  color: #f5a9b8;
  font-weight: bold;
}

.title-highlight {
  background: rgb(245, 169, 184);
  background: linear-gradient(90deg, rgba(245, 169, 184, 1) 0%, rgba(196, 141, 152, 1) 100%);
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px 0px 18px 1px #f5a9b8;
}

/* media properties */

@media (min-width: 640px) {
  main {
    max-width: 800px;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .sm\:justify-center {
    justify-content: center;
  }

  .sm\:flex-row {
    flex-direction: row;
  }

  .hide-desktop {
    display: none !important;
  }
}

@media (max-width: 639px) {
  main {
    max-width: 100%;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .hide-mobile {
    display: none !important;
  }
}

/* typing animation */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
.ani-typing {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(90, end);
  display: inline-block;
  width: 100%;
  -webkit-text-size-adjust: 100%;
}

/* page content fade in */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
  {
  opacity: 0;
}

.ani-fadein {
  opacity: 0;
  animation: fadeIn 250ms ease-in forwards;
}

@media screen and (min-width: 640px) {
  .ani-fadein {
    animation-delay: 700ms;
  }
}
</style>