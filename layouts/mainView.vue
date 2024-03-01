<template>
    <v-card>
        <v-btn v-if="!notMobile" fab dark class="nav-mobile-btn" density="comfortable" icon="mdi mdi-menu"
            @click="toggleDrawer">
            <v-icon />
        </v-btn>

        <!-- Desktop -->
        <v-navigation-drawer v-if="notMobile" expand-on-hover class="nav" rail>
            <v-list>
                <v-list-item prepend-avatar="https://github.com/2lay.png" title="Ashley" subtitle="she/her" />
            </v-list>
            <v-divider />
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.path" :prepend-icon="item.icon" :title="item.title"
                    :to="item.path" :exact="true" color="#e6c3e2" />
            </v-list>
        </v-navigation-drawer>

        <!-- Mobile -->
        <v-navigation-drawer v-if="!notMobile" expand-on-hover class="nav" v-model="drawer" :rail="notMobile">
            <v-list>
                <v-list-item prepend-avatar="https://github.com/2lay.png" title="Ashley" subtitle="she/her" />
            </v-list>
            <v-divider />
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.path" :prepend-icon="item.icon" :title="item.title"
                    :to="item.path" :exact="true" color="#e6c3e2" />
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
                { title: 'Contact', path: '/contact', icon: 'mdi mdi-mailbox' },
            ],
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
