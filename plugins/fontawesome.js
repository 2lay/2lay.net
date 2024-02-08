import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord, faGithub, faLastfm, faYoutube, faSteam } from '@fortawesome/free-brands-svg-icons'

library.add(faDiscord, faGithub, faLastfm, faYoutube, faSteam)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
