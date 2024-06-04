// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/sitemap"],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "https://github.com/2lay.png" }]
    }
  }
})