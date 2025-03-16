import { ComponentType } from "react"
import { Registry } from "../../types/Registry"

export type WidgetName = string

export type WidgetRegistryType = Record<WidgetName, ComponentType<any>>

export type RegisterWidget = (widgetName: WidgetName, widget: ComponentType<any>) => void

export type GetWidgetFromRegistry = (widgetName: WidgetName) => ComponentType<any> | null

export type GetWidgetsFromRegistry = (widgetNames: WidgetName[]) => (ComponentType<any> | null)[]

export class WidgetRegistry extends Registry<ComponentType<any>> {
  private static instance: WidgetRegistry | null = null

  private constructor() {
    super()
  }

  static getInstance(): WidgetRegistry {
    if (!this.instance) {
      this.instance = new WidgetRegistry()
    }
    return this.instance
  }

  registerWidget = (widgetName: WidgetName, widget: ComponentType<any>): void => {
    this.registerItem(widgetName, widget)
  }

  registerWidgets = (widgets: WidgetRegistryType): void => {
    this.registerItems(widgets)
  }

  getWidget: GetWidgetFromRegistry = (widgetName) => this.registry[widgetName] || null

  getWidgets: GetWidgetsFromRegistry = (widgetNames) => this.getItems(widgetNames)
}
// Singleton instance
export const widgetRegistry = WidgetRegistry.getInstance()
