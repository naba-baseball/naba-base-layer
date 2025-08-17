import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-08-17",
  devtools: { enabled: true },
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
  css: [join(currentDir, './app/assets/base.css')],
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
