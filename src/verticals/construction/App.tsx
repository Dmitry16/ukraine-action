import { Suspense } from "react"
import DashboardPage from "./pages/DashboardPage"
import { ErrorBoundary } from "./ErrorBoundary"

const ConstructionApp = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading Construction Dashboard...</p>}>
        <DashboardPage />
      </Suspense>
    </ErrorBoundary>
  )
}

export default ConstructionApp
