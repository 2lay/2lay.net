<template>
<v-dialog background="rgba(33, 33, 33, 0.0)" v-model="dialog" scrim="#000000" activator="parent" width="400px">
    <v-card class="card-style gg">
        <v-card-text>
            <h1>Doesn't open?</h1>

            If this link doesn't open my DMs with you, try adding me
            manually. My username is <strong>2lay</strong>.
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script lang="ts">
export default {
    data(): { dialog: boolean } {
        return {
            dialog: false,
        };
    },
};
</script>