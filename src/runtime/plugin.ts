import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  const elMin = await import('element-plus')
  nuxtApp.vueApp.use(elMin)
})
