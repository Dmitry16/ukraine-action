import { useContext } from "react"
import { GetComponentFromRegistry, GetComponentsFromRegistry } from "../components/componentsRegistry"
import { ComponentRegistryContext } from "../components/componentsRegistryProvider"

export const useComponent: GetComponentFromRegistry = (name) => {
    const context = useContext(ComponentRegistryContext)
  
    if (!context) {
      throw new Error("useComponent must be used within a ComponentProvider")
    }
    return context.getComponent(name)
}
  
export const useComponents: GetComponentsFromRegistry = (componentsNameArr) => {
  const context = useContext(ComponentRegistryContext)

  if (!context) {
    throw new Error("useComponent must be used within a ComponentProvider")
  }
  return context.getComponents(componentsNameArr)
}