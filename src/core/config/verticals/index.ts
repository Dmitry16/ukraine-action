import { construction } from "./construction"
import { healthcare } from "./healthcare"
import { education } from "./education"
import { VerticalUI, Vertical } from "./types"

export const verticalsConfig = {
    verticalsUI: {
        construction,
        healthcare,
        education,
    },
} as const satisfies { verticalsUI: Record<string, VerticalUI> }

const VERTICALS = {
    CONSTRUCTION: "construction",
    HEALTHCARE: "healthcare",
    EDUCATION: "education",

} as const satisfies Record<string, Vertical>

export const verticals = [
    VERTICALS.CONSTRUCTION,
    VERTICALS.HEALTHCARE,
    VERTICALS.EDUCATION,

] as const satisfies Vertical[]
