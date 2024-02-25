<template>
    <v-btn @click="snackbar = true, copyclipboard('2lay')" block target="_blank" class="text-center custom-btn spacing"
        style=" background-color: rgba(123, 148, 238, 0.212); border: 1px solid #4e5776;
                ">
        <span /><font-awesome-icon icon="fa-brands fa-discord" /> &nbsp;Discord&nbsp;<div style="color: #979797;">@2lay
        </div>
        <v-snackbar class="snackbar-style" v-model="snackbar" color="rgba(0, 0, 0, 0.7)" border="1px solid #4e4e4e">
            <div style="color: white;">{{ text }}</div>

            <template v-slot:actions>
                <v-btn color="primary" variant="tonal" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-btn>

    <v-btn block href="https://transfem.social/@2lay" class="text-center custom-btn spacing"
        style="background-color: rgba(38, 129, 162, 0.212); border: 1px solid #204e5e;">
        <span /><font-awesome-icon icon="fa-brands fa-mastodon" /> &nbsp;Mastodon&nbsp; <div style="color: #979797;">
            2lay@transfem.social</div>
    </v-btn>

    <v-btn block href="https://en.pronouns.page/@2lay" class="text-center custom-btn spacing"
        style="background-color: rgba(238, 123, 226, 0.212); border: 1px solid #764e6b;">
        <span /><span class="mdi mdi-card-account-details" /> &nbsp;Pronouns.page&nbsp; <div style="color: #979797;">@2lay
        </div>
    </v-btn>

    <v-btn block href="https://github.com/2lay" class="text-center custom-btn spacing"
        style="background-color: rgba(147, 147, 147, 0.212); border: 1px solid #555555;">
        <span /><font-awesome-icon icon="fa-brands fa-github" /> &nbsp;GitHub&nbsp; <div style="color: #979797;">@2lay</div>
    </v-btn>

    <v-btn block href="https://www.last.fm/user/twolay" class="text-center custom-btn spacing"
        style="background-color: rgba(161, 0, 0, 0.212); border: 1px solid #531e1e;">
        <span /><font-awesome-icon icon="fa-brands fa-lastfm" />&nbsp;Last.fm&nbsp; <div style="color: #979797;">@twolay
        </div>
    </v-btn>

    <v-btn block href="https://steamcommunity.com/id/2lay" class="text-center custom-btn spacing"
        style="background-color: rgba(36, 134, 255, 0.212); border: 1px solid #24415a;">
        <span /><font-awesome-icon icon="fa-brands fa-steam" />&nbsp;Steam&nbsp; <div style="color: #979797;">@2lay</div>
    </v-btn>

    <v-btn block href="https://www.youtube.com/@2lay" class="text-center custom-btn spacing"
        style="background-color: rgba(255, 0, 0, 0.212); border: 1px solid #5a2424;">
        <span /><font-awesome-icon icon="fa-brands fa-youtube" />&nbsp;YouTube&nbsp; <div style="color: #979797;">@2lay
        </div>
    </v-btn>
</template>

<script>
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