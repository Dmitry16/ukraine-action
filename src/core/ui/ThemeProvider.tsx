import { ReactNode } from 'react'
import { ThemeProvider as UIThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/lib/theme/theme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </UIThemeProvider>
  )
}
