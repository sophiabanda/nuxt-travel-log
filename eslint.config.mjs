// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'

export default withNuxt(antfu({
  type: "app",
  vue: true,
  typescript: true,
  formatters: true,
}
))
