// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@vueuse/nuxt'
  ],
  css: [
    'quasar/dist/quasar.css'
  ],
  build: {
    transpile: ['quasar']
  },
  app: {
    head: {
      title: 'V-VVS Business',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Professional VVS services and solutions' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})