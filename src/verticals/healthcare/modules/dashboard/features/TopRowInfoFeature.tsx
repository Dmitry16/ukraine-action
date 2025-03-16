import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets, useWidget } from "@/core/ui/hooks/useWidgets";
import { useComponents } from "@/core/ui/hooks/useComponents";
import { Card, Typography } from "@mui/material";
import { useFeature } from "@/core/ui/hooks/useFeatures";

export const TopRowInfoFeature = () => {
    const healthcareConfig = useConfig("healthcare")
    const topRowInfoFeatureConfig = healthcareConfig?.dashboard?.body?.topRowInfoFeature || []
    
    const widgetNames = Object.keys(topRowInfoFeatureConfig).map(widgetName => widgetName)
    const widgets = useWidgets(widgetNames)

    return (
        <Card sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", maxHeight: "600px", m: 0, p: 1 }}>
            <Typography variant="H6" color="primary">
                TopRowInfoFeature
            </Typography>
            {widgets.map((Widget, index) => 
                Widget && <Widget key={index} />
            )}
        </Card>
    )
}
