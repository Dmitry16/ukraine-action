import { config } from "../config"

class FeatureToggleService {
  isFeatureEnabled(featureName: string): boolean {
    return config.features?.[featureName] ?? false
  }
}

export default new FeatureToggleService()
