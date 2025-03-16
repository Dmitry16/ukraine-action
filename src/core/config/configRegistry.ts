import { Registry } from "../types/Registry"
import { VerticalUI, Pages } from "./verticals/types"

export type GetConfigFromRegistry = (configName: string) => VerticalUI | null

export type GetConfigsFromRegistry = (configNames: string[]) => Partial<Record<string, VerticalUI>>

export class ConfigRegistry extends Registry<VerticalUI> {
    private static instance: ConfigRegistry | null = null
  
    private constructor() {
      super()
    }
  
    static getInstance(): ConfigRegistry {
      if (!this.instance) {
        this.instance = new ConfigRegistry()
      }
      return this.instance
    }
  
    registerConfig = (configName: string, config: VerticalUI): void => {
      this.registerItem(configName, config)
    }
  
    registerConfigs = (configs: Record<string, VerticalUI>): void => {
      this.registerItems(configs)
    }
  
    getConfig: GetConfigFromRegistry = (configName) => this.registry[configName] || null
  
    getConfigs: GetConfigsFromRegistry = (configNames) => {
      return configNames.reduce<ReturnType <GetConfigsFromRegistry>>((acc, name) => {
        const config = this.getConfig(name)
        if (config) {
          acc[name] = config
        }
        return acc
      }, {})
    }
  }
  
  // Singleton instance
  export const configRegistry = ConfigRegistry.getInstance()
  
  