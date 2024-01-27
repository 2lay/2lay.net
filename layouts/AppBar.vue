<template>
  <v-card>
    <v-layout>
      <v-app>
        <v-navigation-drawer expand-on-hover class="nav" rail style="position: fixed; top: 0; left: 0">
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
            <v-list-item  key="info" prepend-icon="mdi mdi-information" title="Information" to="info" exact="true"></v-list-item>
            
  
          </v-list>
         
        </template>-->
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
      isBlogPath: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi mdi-home-city' },
        { title: 'About me', path: '/aboutme', icon: 'mdi mdi-account' },
        // { title: 'Blog', path: '/blog', icon: 'mdi mdi-post' },
        { title: 'Contact', path: '/contact', icon: 'mdi mdi-account-box' }

      ]
    };
  },
  watch: {
    '$route'(to, from) {
      this.isBlogPath = to.path.startsWith('/blog/');
    }
  }
};
</script>
