import { Stack, Typography } from "@mui/material"

import { useSelector } from "react-redux"

import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets } from "@/core/ui/hooks/useWidgets"

import { Card } from "../../partials"

const TopRowInfoFeature = () => {
  const vertical = useSelector((state: any) => state.app.vertical)
  const verticalConfig = useConfig(vertical)

  const topRowInfoFeatureConfig = verticalConfig?.dashboard?.body?.topRowInfoFeature || []

  if (!topRowInfoFeatureConfig) return <Card sx={{ p: 2, m: 2, width: "100%" }}>Feature not found</Card>

  const widgetNames = Object.keys(topRowInfoFeatureConfig).map(widgetName => widgetName)

  const widgets = useWidgets(widgetNames)

  return (
    <Card sx={{ width: "100%", height: "52px", padding: "9px 32px", boxShadow: "0px 4px 6px 0px #0000001A" }}>
      <Stack direction="row" sx={{justifyContent: "space-between"}}>
        <Typography variant="H6" color="primary">
            Top Row Info Feature
        </Typography>

        {widgets.map((Widget, index) => 
            Widget && <Widget key={index} />
        )}
      </Stack>
    </Card>
  );
};

export default TopRowInfoFeature
