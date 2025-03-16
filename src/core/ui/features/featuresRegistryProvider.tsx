import { createContext, ReactNode } from "react"
import { featureRegistry, GetFeatureFromRegistry, GetFeaturesFromRegistry } from "./featuresRegistry"

interface FeatureRegistryContextProps {
  getFeature: GetFeatureFromRegistry
  getFeatures: GetFeaturesFromRegistry
}

export const FeatureRegistryContext = createContext<FeatureRegistryContextProps | undefined>(undefined)

export const FeaturesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FeatureRegistryContext.Provider value={{ getFeature: featureRegistry.getFeature, getFeatures: featureRegistry.getFeatures }}>
      {children}
    </FeatureRegistryContext.Provider>
  )
}
