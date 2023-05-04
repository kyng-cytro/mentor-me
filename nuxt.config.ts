// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Mentor Me",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Unlock your potential with our network of seasoned professional",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,1000&display=swap",
        },
      ],
    },
  },
  tailwindcss: {
    config: {
      content: [],
      darkMode: "class",
      plugins: [require("@tailwindcss/forms")],
      theme: {
        extend: {
          fontFamily: {
            Nunito: ["Nunito", "sans-serif"],
          },
        },
      },
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
