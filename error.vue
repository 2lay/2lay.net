<template>
    <div style="display: contents">
        <div class="h-screen flex sm:flex-row sm:justify-center overflow-y-auto">
            <main style="margin-top: auto; margin-bottom: auto">
                <div style="display: flex; align-items: center">
                    <div class="hide-desktop ani-nav-fadein">
                        <a style="margin-right: 10px; color: #4e4e4e"><img src="https://github.com/2lay.png"
                                alt="Avatar" class="hide-desktop avatar-small">2lay.net |</a>
                        <nuxt-link :to="{ path: '/' }" :class="{ 'active': $route.path === '/' }"
                            style="margin-right: 10px" class="text-deco nav-link">whoami</nuxt-link>
                        <nuxt-link :to="{ path: '/projects' }" :class="{ 'active': $route.path === '/projects' }"
                            style="margin-right: 10px" class="text-deco nav-link">projects</nuxt-link>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;" class="hide-mobile">
                    <transition name="fade">
                        <p v-if="showConsoleText" class="ani-typing-error typing-animation" style="color: #4e4e4e">
                            {{
                                getPageTitle }}
                        </p>
                    </transition>
                    <div style="display: flex; align-items: center" class="ani-nav-fadein">
                        <nuxt-link to="/" :class="{ 'active': $route.path === '/' }" style="margin-right: 10px"
                            class="text-deco nav-link">whoami</nuxt-link>
                        <nuxt-link to="/projects" :class="{ 'active': $route.path === '/projects' }"
                            style="margin-right: 10px" class="text-deco nav-link">projects</nuxt-link>
                    </div>
                </div>
                <transition v-if="showConsoleText" name="fade">
                    <div class="ani-fadein">
                        <div>
                            <h1>
                                <img src="https://github.com/2lay.png" class="hide-mobile avatar"
                                    style="margin-right: 1.5rem" />
                                <span class="title-highlight">404 not found</span>
                            </h1>

                            <p>file not found on the server</p>

                            <nuxt-link to="/" class="entry" style="color: #f5a9b8; text-shadow: 1px 0 10px #f5a9b8">
                                <span class="hover-color">> go home</span>
                            </nuxt-link>
                        </div>
                    </div>
                </transition>
            </main>
        </div>
    </div>
</template>

<style scoped>
.ani-typing-error {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1s steps(90, end);
    display: inline-block;
    width: 100%;
    -webkit-text-size-adjust: 100%;
}
</style>

<script>
import { ref } from 'vue';
const tab = ref(null);
useSeoMeta({
    title: '2lay.net - 404',
    ogTitle: '2lay.net - 404',
    themeColor: '#f5a9b8',
})

export default {

    data() {
        return {
            showConsoleText: true
        };
    },
    computed: {
        getPageTitle() {
            return `[ashley@2lay.net ~] curl -I https://2lay.net${this.$route.path}`;
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
