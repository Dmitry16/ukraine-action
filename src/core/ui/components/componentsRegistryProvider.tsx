import { createContext, ReactNode } from "react"
import { ComponentRegistry, componentRegistry } from "./componentsRegistry"

interface ComponentRegistryContextProps {
  getComponent: ComponentRegistry["getComponent"]
  getComponents: ComponentRegistry["getComponents"]
}

export const ComponentRegistryContext = createContext<ComponentRegistryContextProps | undefined>(undefined)

/**
 * Provides components via React Context.
 */
export const ComponentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ComponentRegistryContext.Provider value={{ getComponent: componentRegistry.getComponent, getComponents: componentRegistry.getComponents }}>
      {children}
    </ComponentRegistryContext.Provider>
  )
}
