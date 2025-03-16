import { useWidget, useWidgets } from "@/core/ui/hooks/useWidgets"
import { ErrorBoundary } from "@/verticals/construction/ErrorBoundary"
import { Box } from "@mui/material"

const DashboardCard = () => {
    const Widget1 = useWidget("SampleWidget1")
    const Widget2 = useWidget("SampleWidget2")

    return (
        <ErrorBoundary>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", maxWidth: "90%", mx: "auto", mt: 5, p: 2 }}>
                {Widget2 ? <Widget2 /> : <p>Widget not found</p>}
                {Widget1 ? <Widget1 /> : <p>Widget not found</p>}
            </Box>
        </ErrorBoundary>
    )
}

export default DashboardCard
