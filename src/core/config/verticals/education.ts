// import { isEnabled } from "effect/RuntimeFlagsPatch"
// import { id } from "effect/Fiber"
import { VerticalUI } from "./types"
import { defaultConfig } from "./defaultConfig"

export const education = {
    ...defaultConfig,
    dashboard: {
        ...defaultConfig.dashboard,
        body: {
            ...defaultConfig.dashboard.body,
            topRowInfoFeature: {
                SensorWidget1: { id: "widget6", widget: "SensorWidget1", isEnabled: true, components: [] },
                SensorWidget2: { id: "widget4", widget: "SensorWidget2", isEnabled: true, components: [] },
                SensorWidget3: { id: "widget5", widget: "SensorWidget3", isEnabled: true, components: [] },
                SensorWidget4: { id: "widget4", widget: "SensorWidget4", isEnabled: true, components: [] },
                SensorWidget5: { id: "widget5", widget: "SensorWidget5", isEnabled: true, components: [] },
                SensorWidget6: { id: "widget6", widget: "SensorWidget5", isEnabled: true, components: [] }
            }
        }
    }
} as const satisfies VerticalUI

