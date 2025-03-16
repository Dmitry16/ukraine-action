import { useContext } from "react"
import { GetWidgetFromRegistry, GetWidgetsFromRegistry } from "../widgets/widgetsRegistry"
import { WidgetRegistryContext } from "../widgets/widgetsRegistryProvider"

export const useWidget: GetWidgetFromRegistry = (widgetName) => {
    const context = useContext(WidgetRegistryContext)
  
    if (!context) {
      throw new Error("useWidget must be used within a WidgetProvider")
    }
    return context.getWidget(widgetName)
}
  
export const useWidgets: GetWidgetsFromRegistry = (widgetsNames) => {
  const context = useContext(WidgetRegistryContext)

  if (!context) {
    throw new Error("useWidgets must be used within a WidgetProvider")
  }
  return context.getWidgets(widgetsNames)
}
