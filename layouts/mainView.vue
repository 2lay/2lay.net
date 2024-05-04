<template>
    <v-card>
        <!-- Mobile nav hamburger -->
        <transition name="fade">
            <v-btn v-if="!notMobile && !drawer && !showNav" fab dark class="nav-mobile-btn btn-hover"
                density="comfortable" icon="mdi mdi-menu" @click="toggleDrawer">
                <v-icon />
            </v-btn>
        </transition>

        <!-- Desktop -->
        <v-navigation-drawer v-if="notMobile && !showNav" expand-on-hover class="nav" rail>
            <v-list>
                <v-list-item prepend-avatar="https://github.com/2lay.png" title="Ashley" subtitle="she/her" />
            </v-list>
            <v-divider />
            <v-list density="compact" nav>
                <v-list-item class="hover-animation"  v-for="item in menuItems" :key="item.path"
                    :prepend-icon="item.icon" :title="item.title" :to="item.path" :exact="true"
                    color=hsl(var(--primary)) />
            </v-list>
        </v-navigation-drawer>

        <!-- Mobile -->
        <v-navigation-drawer v-if="!notMobile && !showNav" expand-on-hover class="nav" v-model="drawer"
            :rail="notMobile">
            <v-list>
                <v-list-item prepend-avatar="https://github.com/2lay.png" title="Ashley" subtitle="she/her" />
            </v-list>
            <v-divider />
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.path" :prepend-icon="item.icon" :title="item.title"
                    :to="item.path" :exact="true" color=hsl(var(--primary)) />
            </v-list>
        </v-navigation-drawer>

        <NuxtPage />
    </v-card>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
    data() {
        return {
            drawer: false,
            notMobile: true,
            menuItems: [
                { title: 'Home', path: '/', icon: 'mdi mdi-home' },
                { title: 'About me', path: '/aboutme', icon: 'mdi mdi-account' },
                { title: 'Projects', path: '/projects', icon: 'mdi mdi-folder-multiple' },
                { title: 'Blog', path: '/blog', icon: 'mdi mdi-newspaper' },
                { title: 'Contact', path: '/contact', icon: 'mdi mdi-mailbox' },
            ],
        }
    },
    computed: {
        showNav() {
            return this.$route.path === '/bio';
        }
    },
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer;
        },
        updateNotMobile() {
            this.notMobile = window.innerWidth >= 1280;
            if (!this.notMobile) {
                this.drawer = false;
            }
        },
    },
    mounted() {
        if (process.client) {
            this.updateNotMobile();
            window.addEventListener('resize', this.updateNotMobile);
        }
    },
    beforeUnmount() {
        if (process.client) {
            window.removeEventListener('resize', this.updateNotMobile);
        }
    },
    watch: {
        notMobile(value) {
            if (!value) {
                this.drawer = false;
            }
        }
    }
}
</script>

<style>
@keyframes fadeIn {
    from {
        opacity: 0.0001;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0.0001;
    }
}

.fade-enter-active {
    animation: fadeIn 0.3s ease-in;
}

.fade-leave-active {
    animation: fadeOut 0.3s ease-out;
}
</style>
