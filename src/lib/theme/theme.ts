import { createTheme, ThemeOptions } from '@mui/material/styles'
import { primary, secondary, onPrimary, onSecondary, blue, purple, grayPalette, green, heatmap, neutrals, red, yellow } from './colors.ts'
import { D1, D2, H1, H2, H3, H4, H5, H6, XL, L, M, S, XS } from './typography.ts'
import "../../declarations.d.ts"

const themeOptions: ThemeOptions = {
  colors: {
    primary: primary,
    secondary: secondary,
    onPrimary: onPrimary,
    onSecondary: onSecondary
  },
  navigation: {
    blue: blue,
    purple: purple
  },
  utilitarian: {
    gray: grayPalette,
    neutrals: neutrals,
    green: green,
    yellow: yellow,
    red: red
  },
  typography: {
    fontFamily: 'Poppins',
    D1: D1,
    D2: D2,
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
    H6: H6,
    XL: XL,
    L: L,
    M: M,
    S: S,
    XS: XS
  },
  heatmap: heatmap,
  status: {
    danger: '#ff1744',
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          height: "fit-content",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& button:focus": {
            outline: "none",
          },
        },
      },
    },
  }
}

const theme = createTheme(themeOptions)

export default theme
