export default defineNuxtConfig({
  extends: [['../layer', {install: true}]],
  modules: ['@nuxt/eslint']
})
