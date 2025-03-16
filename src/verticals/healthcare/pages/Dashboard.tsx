import { useComponent } from "@/core/ui/hooks/useComponents"
import Dashboard from "../modules/dashboard"

const DashboardPage = () => {

    const VerticalSelection = useComponent("VerticalSelection")

    return (
        <>
            {VerticalSelection && <VerticalSelection />}
            <Dashboard />
        </>
    )
}

export default DashboardPage
