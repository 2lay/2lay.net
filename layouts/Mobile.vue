<template>
    <v-btn fab dark class="nav-mobile-btn" density="comfortable" icon="mdi mdi-menu" @click="toggleDrawer">
        <v-icon />
    </v-btn>
    <v-card>
        <v-navigation-drawer v-model="drawer" expand-on-hover class="nav">
            <v-list>
                <v-list-item prepend-avatar="https://github.com/2lay.png" title="Ashley" subtitle="she/her" />
            </v-list>
            <v-divider />
            <v-list density="compact" nav>
                <v-list-item v-for="item in menuItems" :key="item.path" :prepend-icon="item.icon" :title="item.title"
                    :to="item.path" :exact="true" />
            </v-list>
        </v-navigation-drawer>
        <router-view />
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            isBlogPath: false,
            drawer: false,
            menuItems: [
                { title: 'Home', path: '/', icon: 'mdi mdi-home-city' },
                { title: 'About me', path: '/aboutme', icon: 'mdi mdi-account' },
                { title: 'Contact', path: '/contact', icon: 'mdi mdi-account-box' },
            ],
        }
    },
    watch: {
        $route(to, from) {
            this.isBlogPath = to.path.startsWith('/blog/')
        },
    },
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer
        },
    },
}
</script>
