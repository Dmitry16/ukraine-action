import { verticals } from "../config/verticals"

const loadPlugins = async () => {
  for (const vertical of verticals) {
    try {
      const module = await import(`../../verticals/${vertical}/index.ts`)
      module.default.register()
    } catch (error) {
      console.error(`Failed to load vertical: ${vertical}`, error)
    }
  }
}

export default loadPlugins
