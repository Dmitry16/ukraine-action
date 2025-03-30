export type Vertical = "construction" | "healthcare" | "education"

import { Widget } from "@/core/types/uiTypes"

export type Pages = "dashboard" | "reporting" | "auditTool" | "communication" | "admin" | "operations"

export type PageSections = "header" | "body" | "footer"

export type SectionFeatures = {
    header: 'headerFeature' | 'headerToolbarFeature'
    body: "dashboardTop" | "topRowInfoFeature" | "liveMap" | "generalAttendanceFeature" | "attendanceList" | "sampleFeature"
    footer: 'footerFeature'
  }

// Mapped type to enforce correct Features per PageSection
export type StructuredPage = {
    [S in PageSections]?: {
      [F in SectionFeatures[S]]?: Record<string, Widget> & { widgetOrder?: string[] }
    }
  }

export type VerticalUI = {
    [P in Pages]: StructuredPage
}
