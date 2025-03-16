import { ComponentType } from "react"
import { Registry } from "../../types/Registry"

type ComponentName = string

export type GetComponentFromRegistry = (componentName: ComponentName) => ComponentType<any> | null

export type GetComponentsFromRegistry = (componentNames: ComponentName[]) => (ComponentType<any> | null)[]

export type ComponentsRegistryType = Record<ComponentName, ComponentType<any>>

export class ComponentRegistry extends Registry<ComponentType<any>> {
  private static instance: ComponentRegistry | null = null

  private constructor() {
    super()
  }

  static getInstance(): ComponentRegistry {
    if (!this.instance) {
      this.instance = new ComponentRegistry()
    }
    return this.instance
  }

  registerComponent = (componentName: ComponentName, component: ComponentType<any>): void => {
    this.registerItem(componentName, component)
  }

  registerComponents = (components: ComponentsRegistryType): void => {
    this.registerItems(components)
  }

  getComponent: GetComponentFromRegistry = (componentName) => this.registry[componentName] || null

  getComponents: GetComponentsFromRegistry = (componentNames) => this.getItems(componentNames)
}

// Singleton instance
export const componentRegistry = ComponentRegistry.getInstance()
