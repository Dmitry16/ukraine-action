import { useContext } from "react"
import { GetFeatureFromRegistry, GetFeaturesFromRegistry } from "../features/featuresRegistry"
import { FeatureRegistryContext } from "../features/featuresRegistryProvider"

export const useFeature: GetFeatureFromRegistry = (featureName) => {
    const context = useContext(FeatureRegistryContext)
  
    if (!context) {
      throw new Error("useFeature must be used within a FeatureProvider")
    }
    return context.getFeature(featureName)
}
  
export const useFeatures: GetFeaturesFromRegistry = (featuresNames) => {
  const context = useContext(FeatureRegistryContext)

  if (!context) {
    throw new Error("useFeatures must be used within a FeatureProvider")
  }
  return context.getFeatures(featuresNames)
}
