// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/', '/business', '/contact', '/projects']
    }
  },
  modules: [
    '@vueuse/nuxt'
  ],
  components: {
    global: true,
    dirs: [
      '~/components'
    ]
  },
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    'quasar/dist/quasar.css',
    '@/assets/css/global.css'
  ],
  build: {
    transpile: ['quasar']
  },
  plugins: [
    '~/plugins/quasar.client.ts'
  ],
  app: {
    head: {
      title: 'V-VVS Business',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Professional VVS services and solutions' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Icons' }
      ]
    }
  }
})