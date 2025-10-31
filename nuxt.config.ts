import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        ssr: {
            noExternal: ['vuetify'], // important pour le rendu SSR
        },
        plugins: [
            vuetify({
                autoImport: true,
            }),
        ],
    },
})

