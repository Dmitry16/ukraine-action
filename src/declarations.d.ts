import React from "react"
import '@mui/material/styles'
import '@mui/material/Typography'

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: {
        clearBlue: string
        royalBlue: string
        ambassadorBlue: string
        navalNight: string
      }
      secondary: {
        clearPurple: string
        pacificBrigde: string
        sunsetSky: string
        darkPurple: string
      }
      onPrimary: string
      onSecondary: string
    }
    navigation: {
      blue: Record<0 | 1 | 2 | 3 | 4, string>
      purple: Record<0 | 1 | 2 | 3 | 4, string>
    }
    utilitarian: {
      gray: Record<0 | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100, string>
      neutrals: {
        dark: string
        slate: string
        lightSlate: string
        textPlaceHolder: string
        grey: string
        subtle: string
      }
      yellow: Record<20 | 40 | 60 | 80 | 100, string>
      green: Record<20 | 40 | 60 | 80 | 100, string>
      red: Record<20 | 40 | 60 | 80 | 100, string>
    }
    heatmap: Record<"0.1" | "0.3" | "0.5" | "0.7" | "1.0", string>
    status: {
      danger: string
    }
    typography: TypographyVariants
  }

  interface ThemeOptions {
    colors?: {
      primary?: {
        clearBlue?: string
        royalBlue?: string
        ambassadorBlue?: string
        navalNight?: string
      }
      secondary?: {
        clearPurple?: string
        pacificBrigde?: string
        sunsetSky?: string
        darkPurple?: string
      }
      onPrimary?: string
      onSecondary?: string
    }
    navigation: {
      blue?: Partial<Record<0 | 1 | 2 | 3 | 4, string>>
      purple?: Partial<Record<0 | 1 | 2 | 3 | 4, string>>
    }
    utilitarian: {
      gray?: Partial<Record<0 | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100, string>>
      neutrals?: {
        dark?: string
        slate?: string
        lightSlate?: string
        textPlaceHolder?: string
        grey?: string
        subtle?: string
      }
      yellow?: Partial<Record<20 | 40 | 60 | 80 | 100, string>>
      green?: Partial<Record<20 | 40 | 60 | 80 | 100, string>>
      red?: Partial<Record<20 | 40 | 60 | 80 | 100, string>>
    }
    heatmap?: Partial<Record<"0.1" | "0.3" | "0.5" | "0.7" | "1.0", string>>
    status?: {
      danger: string
    }
    typography?: TypographyVariantsOptions
  }

  interface TypographyVariants {
    D1: React.CSSProperties
    D2: React.CSSProperties
    H1: React.CSSProperties
    H2: React.CSSProperties
    H3: React.CSSProperties
    H4: React.CSSProperties
    H5: React.CSSProperties
    H6: React.CSSProperties
    XL: React.CSSProperties
    L: React.CSSProperties
    M: React.CSSProperties
    S: React.CSSProperties
    XS: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    D1?: React.CSSProperties
    D2?: React.CSSProperties
    H1?: React.CSSProperties
    H2?: React.CSSProperties
    H3?: React.CSSProperties
    H4?: React.CSSProperties
    H5?: React.CSSProperties
    H6?: React.CSSProperties
    XL: React.CSSProperties
    L: React.CSSProperties
    M: React.CSSProperties
    S: React.CSSProperties
    XS: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    D1: true
    D2: true
    H1: true
    H2: true
    H3: true
    H4: true
    H5: true
    H6: true
    XL: true
    L: true
    M: true
    S: true
    XS: true
  }
}

declare module "@react-router/dev/routes";
