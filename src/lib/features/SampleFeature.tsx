import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets } from "@/core/ui/hooks/useWidgets";
import { Box } from "@mui/material";

export const HeaderFeature = () => {
    const educationVerticalConfig = useConfig("education")
    const headerFeatureConfig = educationVerticalConfig?.dashboard?.header?.headerFeature || []

    const widgetNames = Object.keys(headerFeatureConfig).map(widgetName => widgetName)

    const widgets = useWidgets(widgetNames)

    return (
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", maxHeight: "300px", m: 0, p: 1 }}>
            {widgets.map((Widget, index) => 
                Widget && <Widget key={index} />
            )}
        </Box>
    )
}
