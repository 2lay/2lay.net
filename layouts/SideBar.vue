<template>
    <v-card>
        <v-layout>
            <v-app>
                <v-navigation-drawer expand-on-hover class="nav" rail style="position: fixed; top: 0; left: 0">
                    <v-list>
                        <v-list-item prepend-avatar="https://github.com/2lay.png" title="Ashley" subtitle="she/her" />
                    </v-list>
                    <v-divider />
                    <v-list density="compact" nav>
                        <v-list-item v-for="item in menuItems" :key="item.path" :prepend-icon="item.icon"
                            :title="item.title" :to="item.path" :exact="true" color="#e6c3e2" />
                    </v-list>
                </v-navigation-drawer>
                <NuxtPage />
            </v-app>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { title: 'Home', path: '/', icon: 'mdi mdi-home' },
                { title: 'About me', path: '/aboutme', icon: 'mdi mdi-account' },
                { title: 'Contact', path: '/contact', icon: 'mdi mdi-mailbox' },
            ],
        }
    },
}
</script>
