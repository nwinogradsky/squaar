// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: { defaultSet: 'md', aliases, sets: { md } },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    colors: {
                        primary: '#C02026',   // Rouge lignes
                        secondary: '#121212', // Graphite
                        surface: '#FFFFFF',
                        background: '#F6F2EA', // beige très clair parquet
                    },
                },
            },
        },
    })
    nuxtApp.vueApp.use(vuetify)
})
