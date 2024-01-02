// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'AfrikHubTours',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'icon',
          sizes: '192x192',
          href: './favicon/favicon.ico',
          type: 'image/x-icon',
        },
        {
          rel: 'apple-touch-icon',
          href: './favicon/apple-touch-icon.png',
          type: 'image/x-icon',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
