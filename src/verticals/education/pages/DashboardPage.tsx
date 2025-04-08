import { useComponent } from "@/core/ui/hooks/useComponents"
import Dashboard from "../modules/dashboard"

const DashboardPage = () => {
    console.log("DashboardPage::::::")

    const VerticalSelection = useComponent("VerticalSelection")
    const CustomisableUiSwitch = useComponent("CustomisableUiSwitch")

    return (
        <>
            {VerticalSelection && <VerticalSelection />}
            {CustomisableUiSwitch && <CustomisableUiSwitch />}
            <Dashboard />
        </>
    )
}

export default DashboardPage
