import { defineNuxtModule, addPlugin, addComponent } from '@nuxt/kit'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'l-min',
    configKey: 'lMin'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const currentDir = dirname(fileURLToPath(import.meta.url))

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(join(currentDir, './runtime/plugin'))
    addComponent({
      name: 'card',
      export: 'el-card',
      filePath: 'element-plus/es/components/card/index'
    })
  }
})
