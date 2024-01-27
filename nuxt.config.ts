
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: ['vuetify/lib/styles/main.sass' , "@fortawesome/fontawesome-svg-core/styles.css"],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  
  modules: [
    'nuxt-mdi',
    "@nuxtjs/google-fonts",
    '@nuxtjs/sitemap',
  ],
  site: {
    url: 'https://2lay.net',
    
  },
  sitemap: {
    // exclude all URLs that start with /secret
    exclude: ['/blog/**', '/blog', '/info'],
    // include all URLs that start with /public
 
  },

  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      'Josefin+Sans': [100, 300, 400, 500, 700, 900],
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400, 500, 700, 900],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },
  
})

