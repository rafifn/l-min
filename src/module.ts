import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    // const currentDir = dirname(fileURLToPath(import.meta.url))
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(join(currentDir, './runtime/plugin'))
    addComponent({
      name: 'LCard',
      filePath: resolver.resolve('runtime/components/LCard.vue')
    })
  }
})
