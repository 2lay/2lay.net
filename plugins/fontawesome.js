import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faTwitch, faGithubSquare, faDiscord, faGithub, faLastfm, faYoutube, faSteam } from '@fortawesome/free-brands-svg-icons'

library.add(faDiscord, faGithub, faLastfm, faYoutube, faSteam)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})