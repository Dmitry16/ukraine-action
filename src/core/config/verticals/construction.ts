import { VerticalUI } from "./types"

import { defaultConfig } from "./defaultConfig"

export const construction = {

    ...defaultConfig,

    dashboard: {
        ...defaultConfig.dashboard,
        body: {
            ...defaultConfig.dashboard.body,
            // overriding the default config generalAttendanceFeature to add or remove widgets or components
            generalAttendanceFeature: {
                GeneralAttendanceTableWidget: {
                    id: "widget1", 
                    isEnabled: true,
                    components: [
                        { id: "GeneralAttendanceTableId", name: "GeneralAttendanceTable" },
                        // { id: "SampleComponent2", name: "SampleComponent2" },
                    ]
                },
            },
        },
    },

} as const satisfies VerticalUI
