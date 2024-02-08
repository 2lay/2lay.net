import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

import '@mdi/font/css/materialdesignicons.css'

const twolaytheme = {
    dark: true,
    colors: {
        background: '#424242',
        surface: '#424242',
        primary: '#d754ff',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'twolaytheme',
            themes: {
                twolaytheme,
            },
        },
        components,
    })

    nuxtApp.vueApp.use(vuetify)
})
