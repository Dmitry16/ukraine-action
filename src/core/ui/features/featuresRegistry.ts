import { ComponentType } from "react"
import { Registry } from "../../types/Registry"

export type FeatureName = string

export type FeatureRegistryType = Record<FeatureName, ComponentType<any>>

export type RegisterFeature = (featureName: FeatureName, feature: ComponentType<any>) => void

export type GetFeatureFromRegistry = (featureName: FeatureName) => ComponentType<any> | null

export type GetFeaturesFromRegistry = (featureNames: FeatureName[]) => (ComponentType<any> | null)[]

export class FeatureRegistry extends Registry<ComponentType<any>> {
  private static instance: FeatureRegistry | null = null

  private constructor() {
    super()
  }

  static getInstance(): FeatureRegistry {
    if (!this.instance) {
      this.instance = new FeatureRegistry()
    }
    return this.instance
  }

  registerFeature = (featureName: FeatureName, feature: ComponentType<any>): void => {
    this.registerItem(featureName, feature)
  }

  registerFeatures = (features: FeatureRegistryType): void => {
    this.registerItems(features)
  }

  getFeature: GetFeatureFromRegistry = (featureName) => this.registry[featureName] || null

  getFeatures: GetFeaturesFromRegistry = (featureNames) => this.getItems(featureNames)
}
// Singleton instance
export const featureRegistry = FeatureRegistry.getInstance()
