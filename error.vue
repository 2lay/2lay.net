<template>
    <v-app class="img-bg">
        <v-container class="fill-height">
            <v-responsive class="align-center text-center fill-height">
                <v-card class="card-home card-custom">
                    <h1 class="text-h3 font-weight-bold">404 not found</h1>
                    <p class="spacer">This page isn't here. Maybe it moved, or it never existed.</p>
                    <v-btn style="background-color: rgba(223, 123, 238, 0.212); border: 1px solid #754e76"
                        @click="$router.go(-1)">
                        <span class="mdi mdi-arrow-left-bold" />
                        &nbsp;Go back
                    </v-btn>
                    &nbsp;

                    <router-link to="/" tag="v-btn">
                        <v-btn style="background-color: rgba(87, 87, 87, 0.212); border: 1px solid #424242">
                            <span class="mdi mdi-home" />
                            &nbsp;Go home
                        </v-btn>
                    </router-link>
                </v-card>
            </v-responsive>
        </v-container>
    </v-app>
</template>

<script>
useSeoMeta({
    title: '2lay.net - 404 not found',
    ogTitle: '2lay.net - 404 not found',
    description: "Uh oh, something went wrong. This page isn't here. Maybe it moved, or it never existed.",
    ogDescription: "Uh oh, something went wrong. This page isn't here. Maybe it moved, or it never existed.",
    themeColor: '#d754ff',
    twitterCard: 'summary_large_image',
})
</script>
