import { Suspense } from "react"
import DashboardPage from "./pages/Dashboard"

const ConstructionApp = () => {
  return (
    <Suspense fallback={<p>Loading Construction Dashboard...</p>}>
      <DashboardPage />
    </Suspense>
  )
}

export default ConstructionApp
