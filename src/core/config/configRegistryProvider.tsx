import { createContext, ReactNode } from "react"
import { configRegistry } from "./configRegistry"
import { GetConfigFromRegistry } from "./configRegistry"
import { GetConfigsFromRegistry } from "./configRegistry"

interface ConfigRegistryContextProps {
  getConfig: GetConfigFromRegistry
  getConfigs: GetConfigsFromRegistry
}

export const ConfigRegistryContext = createContext<ConfigRegistryContextProps | undefined>(undefined)

export const ConfigsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigRegistryContext.Provider value={{ getConfig: configRegistry.getConfig, getConfigs: configRegistry.getConfigs }}>
      {children}
    </ConfigRegistryContext.Provider>
  )
}
