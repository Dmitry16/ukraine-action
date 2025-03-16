import { createContext, ReactNode } from "react"
import { widgetRegistry, GetWidgetFromRegistry, GetWidgetsFromRegistry } from "./widgetsRegistry"

interface WidgetRegistryContextProps {
  getWidget: GetWidgetFromRegistry
  getWidgets: GetWidgetsFromRegistry
}

export const WidgetRegistryContext = createContext<WidgetRegistryContextProps | undefined>(undefined)

export const WidgetsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WidgetRegistryContext.Provider value={{ getWidget: widgetRegistry.getWidget, getWidgets: widgetRegistry.getWidgets }}>
      {children}
    </WidgetRegistryContext.Provider>
  )
}
