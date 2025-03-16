import { useContext } from "react"
import { ConfigRegistryContext } from "../configRegistryProvider"
import { GetConfigFromRegistry, GetConfigsFromRegistry } from "../configRegistry"

export const useConfig: GetConfigFromRegistry = (configName) => {
    const context = useContext(ConfigRegistryContext)
  
    if (!context) {
      throw new Error("useConfig must be used within a ConfigProvider")
    }
    return context.getConfig(configName)
}
  
export const useConfigs: GetConfigsFromRegistry = (configs) => {
  const context = useContext(ConfigRegistryContext)

  if (!context) {
    throw new Error("useConfigs must be used within a ConfigProvider")
  }
  return context.getConfigs(configs)
}
