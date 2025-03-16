type Verticals = {
    construction: boolean
    healthCare: boolean
    education: boolean
}

type Api = {
    baseUrl: string
}

type Features = {
    [key: string]: boolean
}

export type Config = {
    verticals: Verticals
    api: Api
    features: Features
}

export const config: Config = {
    verticals: {
        construction: true,
        healthCare: true,
        education: true
    },
    api: {
        baseUrl: "https://api.example.com"
    },
    features: {
        newFeature: true
    }
}
