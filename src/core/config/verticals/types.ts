export type Vertical = "construction" | "healthcare" | "education"

import { Feature } from "@/core/types/uiTypes"

// export type Component = {
//     id: string
//     name: string
// }

// export type Widget = {
//     id: string
//     widget?: string
//     isEnabled?: boolean
//     components?: Component[]
// }

// export type Feature = Record<string, Widget>

export type Pages = "dashboard" | "reporting" | "auditTool" | "communication" | "admin" | "operations"

export type PageSections = "header" | "body" | "footer"

export type SectionFeatures = {
    header: "headerFeature" | "headerToolbarFeature"
    body: "dashboardTop" | "topRowInfoFeature" | "liveMap" | "generalAttendanceFeature" | "attendanceList" | "sampleFeature"
    footer: "footerFeature"
}

// Mapped type to enforce correct Features per PageSection
export type StructuredPage = {
    [S in PageSections]?: {
        [F in SectionFeatures[S]]?: Feature
    }
}

export type VerticalUI = {
    [P in Pages]: StructuredPage
}
