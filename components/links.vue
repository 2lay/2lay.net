<template >
    <v-btn @click="snackbar = true, copyclipboard('2lay')" block target="_blank"
        class="text-center btn-custom btn-spacing btn-hover" style=" background-color: rgba(86, 96, 234, 0.212); border: 1px solid rgba(86, 96, 234, 0.412); overflow: visible;
                ">
        <span /><font-awesome-icon icon="fa-brands fa-discord" /> &nbsp;Discord&nbsp;<div style="color: #979797;">@2lay
        </div>
        <v-snackbar class="snackbar-style" v-model="snackbar" color="rgba(0, 0, 0, 0.7)">
            <div style="color: white;">{{ text }}</div>

            <template v-slot:actions>
                <v-btn color="hsl(var(--primary))" variant="tonal" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-btn>
    <div v-for="item in links_socials" :key="item.name">
        <v-btn block :href="item.link" class="text-center btn-custom btn-spacing btn-hover"
            :style="'background-color: rgba(' + item.rgb + ', 0.212); border: 1px solid rgba(' + item.rgb + ', 0.412);'">
            <template v-if="item.icon.startsWith('mdi')">
                <span :class="item.icon"></span>
            </template>
            <template v-else>
                <font-awesome-icon :icon="item.icon" />
            </template>
            &nbsp;{{ item.name }}&nbsp;
            <div style="color: #979797;">{{ item.domain }}</div>
        </v-btn>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const links_socials = ref([
    {
        rgb: '220, 27, 37',
        icon: 'fa-brands fa-lastfm',
        name: 'Last.fm',
        domain: '@twolay',
        link: 'https://www.last.fm/user/twolay',
    },
    {
        rgb: '147, 147, 147',
        icon: 'fa-brands fa-github',
        name: 'GitHub',
        domain: '@2lay',
        link: 'https://github.com/2lay',
    },
    {
        rgb: '247, 15, 27',
        icon: 'fa-brands fa-youtube ',
        name: 'YouTube',
        domain: '@2lay',
        link: 'https://www.youtube.com/channel/UC-jrEls9AJslFXMyonCd09w',
    },
    {
        rgb: '19, 115, 163',
        icon: 'fa-brands fa-steam',
        name: 'Steam',
        domain: '@2lay',
        link: 'https://steamcommunity.com/id/2lay',
    },
    {
        rgb: '255, 149, 187',
        icon: 'mdi mdi-card-account-details',
        name: 'Pronouns.page',
        domain: '@2lay',
        link: 'https://en.pronouns.page/@2lay',
    },
])

</script>

<script >
export default {
    data: () => ({
        snackbar: false,
        text: 'Copied username to clipboard.',
        timeout: 2000,
    }),
    methods: {
        copyclipboard(text) {
            navigator.clipboard.writeText(text)
        },
    }
}
</script>