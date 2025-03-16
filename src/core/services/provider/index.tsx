import { createContext, ReactNode } from "react"
import { DbWithConfigLayer } from "../layers/DbLayer"

/**
 * Define the context type to expect an object with `DbService`
 */
interface ServicesContextProps {
    DbWithConfigLayer: typeof DbWithConfigLayer
}

// Provide a default undefined value initially
export const ServicesContext = createContext<ServicesContextProps | undefined>(undefined)

/**
 * Provides services via React Context.
 */
export const ServicesProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ServicesContext.Provider value={{ DbWithConfigLayer }}>
      {children}
    </ServicesContext.Provider>
  )
}
