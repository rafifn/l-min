import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addComponent({
      name: 'LCard',
      filePath: resolver.resolve('runtime/components/LCard.vue')
    })
    if(nuxt.options.vite.optimizeDeps && nuxt.options.vite.optimizeDeps.include) {
      nuxt.options.vite.optimizeDeps.include.push('@element-plus/nuxt')
    }
  }
})
