import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord, faGithub, faLastfm, faYoutube, faSteam, faMastodon } from '@fortawesome/free-brands-svg-icons'

library.add(faDiscord, faGithub, faLastfm, faYoutube, faSteam, faMastodon)
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
