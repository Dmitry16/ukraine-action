import { createContext, useContext, useState, lazy, ReactNode } from "react"
import { Effect } from "effect"

type AppContextType = {
  VerticalApp: React.ComponentType<any> | null
  setVerticalApp: (verticalApp: React.ComponentType<any>) => void
  loadVertical: (verticalName: string | null) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [VerticalApp, setVerticalApp] = useState<React.ComponentType<any> | null>(null)

  const loadVertical = (verticalName: string | null) => {
    if (!verticalName) return

    console.log(`Loading vertical: ${verticalName}`)

    Effect.runPromise(
      Effect.gen(function* () {
        const module = yield* Effect.tryPromise({
          try: async () => await import(`../../verticals/${verticalName}/App`),
          catch: (error) => {
            console.log(`Failed to load vertical: ${verticalName}, original error: ${error}`)
          },
        })

        if (module) setVerticalApp(lazy(() => Promise.resolve(module)))
      })
    )
  }

  return (
    <AppContext.Provider value={{ VerticalApp, setVerticalApp, loadVertical }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error("useAppContext must be used within an AppProvider")
  return context
}
