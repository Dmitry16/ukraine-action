import { render } from "@testing-library/react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme/theme"

const RenderWithTheme = (ui: React.ReactElement) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

export default RenderWithTheme;