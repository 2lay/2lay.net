<template>
  <v-btn fab dark color="primary" @click="toggleDrawer" class="overlay-button" density="comfortable"
    icon="mdi mdi-menu"><v-icon></v-icon>
  </v-btn>

  <v-card>
    <v-navigation-drawer v-model="drawer" expand-on-hover class="nav">
      <v-list>
        <v-list-item prepend-avatar="https://github.com/2lay.png" title="2lay" subtitle="she/her"></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-for="item in menuItems" :key="item.path" :prepend-icon="item.icon" :title="item.title"
          :to="item.path" :exact="true"></v-list-item>
      </v-list>

      <!--<template v-slot:append>
            <v-list density="compact" nav>
              <v-list-item
                key="info"
                prepend-icon="mdi mdi-information"
                title="Information"
                to="info"
                exact="true"
              ></v-list-item>
            </v-list>
          </template>-->
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
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer; 
    },
  },
  watch: {
    '$route'(to, from) {
      this.isBlogPath = to.path.startsWith('/blog/');
    }
  }

};
</script>
