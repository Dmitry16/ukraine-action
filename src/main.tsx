import { StrictMode, useEffect, useState } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import initializeApp from "./core/initializeApp"
import { ThemeProvider } from "./core/ui/ThemeProvider"
import { ComponentsProvider } from "./core/ui/components/componentsRegistryProvider"
import { WidgetsProvider } from "./core/ui/widgets/widgetsRegistryProvider"
import { FeaturesProvider } from "./core/ui/features/featuresRegistryProvider"
import { ServicesProvider } from "./core/services/provider/index"
import { ConfigsProvider } from "./core/config/configRegistryProvider"
import store from "./core/store"

import "./index.css"
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

// A wrapper component to manage the initialization process
const Root = () => {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const startApp = async () => {
      await initializeApp()
      setIsInitialized(true)
    }

    startApp()
  }, [])

  if (!isInitialized) {
    return <p>Initializing application...</p>
  }

  return (
    <StrictMode>
      <ConfigsProvider>
        <ServicesProvider>
          <ThemeProvider>
            <ComponentsProvider>
              <WidgetsProvider>
                <FeaturesProvider>
                  <App store={store}/>
                </FeaturesProvider>
              </WidgetsProvider>
            </ComponentsProvider>
          </ThemeProvider>
        </ServicesProvider>
      </ConfigsProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById("root")!).render(<Root />)
