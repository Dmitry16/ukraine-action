import loadPlugins from "./plugins/pluginLoader"
import components from "@/lib/components"
import widgets from "@/lib/widgets"
import features from "@/lib/features"
import { verticalsConfig } from "./config/verticals"
import { componentRegistry } from "./ui/components/componentsRegistry"
import { widgetRegistry } from "./ui/widgets/widgetsRegistry"
import { featureRegistry } from "./ui/features/featuresRegistry"
import { configRegistry } from "./config/configRegistry"

const initializeApp = async () => {
  try {
  console.log("Initializing App...")

  await loadPlugins()

  componentRegistry.registerComponents(components)
  widgetRegistry.registerWidgets(widgets)
  featureRegistry.registerFeatures(features)
  configRegistry.registerConfigs(verticalsConfig.verticalsUI)

  console.log("App initialized!")
  } catch (error) {
    console.error("Failed to initialize App", error)
  }
}

export default initializeApp
