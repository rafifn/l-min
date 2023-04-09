import { defineNuxtModule, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    await addComponentsDir({
      path: resolver.resolve('runtime/components'),
      transpile: 'auto',
      global: true
    })
    nuxt.options.css.push(resolver.resolve('element-plus/dist/index.css'))
  }
})
