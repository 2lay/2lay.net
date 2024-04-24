<template>
    <v-app class="img-bg">
        <v-container class="fill-height">
            <v-responsive class="align-center text-center fill-height">
                <v-card class="card-home card-custom card-hover">
                    <h1 class="text-h3 font-weight-bold shadow-animation">Projects</h1>
                    <p class="spacer">
                        Here are some of my projects! Click on them to learn more.
                    </p>
                    <div v-for="(item, index) in projects" :key="index">
                        <v-card @click="openDialog(index)" class="mx-auto my-2 text-left card-custom" max-width="344"
                            :subtitle="item.project_shortdesc" :title="item.project_title" link
                            :image="item.project_image" color="#1e1e1e" style="user-select: none;"></v-card>
                    </div>
                </v-card>

                <v-dialog overlay-color="black" theme="light" v-model="dialog" width="auto">
                    <v-card class="card-custom card-hover" max-width="400" color="var(--card)"
                        style="    backdrop-filter: blur(4px);">
                        <div style="margin-left: 25px; margin-right:25px; margin-top: 8px; margin-bottom: 15px;">
                            <h1 class="text-h4 text-center font-weight-bold" style="margin-bottom: 8px;">{{
                                selectedProject.project_title }}</h1>
                            <span v-if="selectedProject?.project_showversion"><strong>Version: </strong>{{
                                selectedProject.project_version }}<br /></span>
                            <span v-if="selectedProject?.project_showLicense"><strong>License: </strong>{{
                                selectedProject.project_license }}<br /><br /></span>
                            <strong v-if="selectedProject?.project_showDescriptionTitle">Description: </strong>{{
                            selectedProject.project_longdescription }}
                        </div>

                        <template v-slot:actions>
                            <v-divider color="#00000000"></v-divider>

                            <v-btn :href="selectedProject.project_btnurl" target="_blank"
                                style="background-color: hsl(var(--info), 0.3); border: 1px solid hsl(var(--info), 0.4)">
                                <span class="mdi mdi-link-variant"></span>&nbsp;{{ selectedProject.project_btntext }}
                            </v-btn>

                            <v-btn @click="closeDialog"
                                style="background-color: hsl(var(--danger), 0.3); border: 1px solid hsl(var(--danger), 0.4)">
                                <span class="mdi mdi-close"></span>&nbsp;Close
                            </v-btn>
                        </template>
                    </v-card>
                </v-dialog>

            </v-responsive>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref(null);
useSeoMeta({
    title: '2lay.net | Projects',
    ogTitle: '2lay.net | Projects',
    description: 'Here are some of my projects!',
    ogDescription: 'Here are some of my projects!',
    ogImage: 'https://2lay.net/avatar.png',
    twitterCard: 'summary_large_image',
    themeColor: '#e6c3e2',
});
interface Project {
    project_title: string;
    project_shortdesc: string;
    project_image: string;

    project_version: string;
    project_showversion: boolean;
    project_license: string;
    project_showLicense: boolean;
    project_longdescription: string;
    project_showDescriptionTitle: boolean;

    project_btntext: string;
    project_btncolor: string;
    project_btnurl: string;
}

const projects = ref<Project[]>([
    {
        project_title: 'TMW.gg',
        project_shortdesc: 'A different modded network',
        project_image: '/projects/tmw.png',

        project_version: "",
        project_showversion: false,
        project_license: "",
        project_showLicense: false,
        project_longdescription: "A different modded network for Minecraft, providing everyone a unique modded experience",
        project_showDescriptionTitle: false,

        project_btntext: "Go to",
        project_btncolor: "main",
        project_btnurl: "https://tmw.gg/"
    },
])

const dialog = ref(false);
const selectedProject = ref<Project | null>(null); 

function openDialog(index: number) {
    selectedProject.value = projects.value[index];
    dialog.value = true;
}

function closeDialog() {
    dialog.value = false;
}
</script>


