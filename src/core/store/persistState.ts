import type { RootState } from "." // Import type, avoiding circular dependency

export const saveState = (state: RootState): void => {
  // console.log("saveState::::state::", state)
  try {
    // localStorage.setItem("reduxState", JSON.stringify(state))
  } catch (error) {
    console.error("Error saving state:", error)
  }
}

export const loadState = (): Partial<RootState> => {
  // console.log("loadState::::::")
  try {
    const savedState = localStorage.getItem("reduxState")
    return savedState ? (JSON.parse(savedState) as Partial<RootState>) : {}
  } catch (error) {
    console.error("Error loading state:", error)
    return {}
  }
}
