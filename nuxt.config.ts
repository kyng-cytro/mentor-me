// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/supabase",
  ],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Mentoring for growth",
        },
      ],
    },
  },
  tailwindcss: {
    config: {
      content: [],
      darkMode: "class",
    },
  },
  vite: {
    resolve: {
      // To fix prisma issue
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
      },
    },
  },
});
