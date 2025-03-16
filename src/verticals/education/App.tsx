import { Suspense } from "react"
import Dashboard from "./pages/DashboardPage"

const ConstructionApp = () => {
  return (
    <Suspense fallback={<p>Loading Education Dashboard...</p>}>
      <Dashboard />
    </Suspense>
  )
}

export default ConstructionApp
