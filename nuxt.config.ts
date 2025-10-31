import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: ['vuetify/styles'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        ssr: {
            noExternal: ['vuetify'],
        },
        plugins: [
            vuetify({
                autoImport: true,
            }),
        ],
    },
    app: {
        head: {
            title: 'SQUAAR — Trouve un match près de chez toi',
            meta: [{name: 'viewport', content: 'width=device-width, initial-scale=1'}],
            link: [{rel: 'icon', href: '/favicon.ico'}],
        },
    }
})

