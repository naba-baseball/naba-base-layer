// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "preconnect", href: "https://rsms.me" },
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      ],
    },
  },
  experimental: {
    asyncContext: true,
    typedPages: true,
  },
  modules: ["@vueuse/nuxt", "@nuxt/eslint", "@nuxt/ui"],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
