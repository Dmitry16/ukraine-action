import { Stack, Typography } from "@mui/material"

import { useSelector } from "react-redux"

import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets } from "@/core/ui/hooks/useWidgets"

import { Card } from "../../partials/index"

const GeneralAttendanceFeature = () => {
  const vertical = useSelector((state: any) => state.app.vertical)
  const verticalConfig = useConfig(vertical)

  const generalAttendanceFeatureConfig = verticalConfig?.dashboard?.body?.generalAttendanceFeature || []

  if (!generalAttendanceFeatureConfig) return <Card sx={{ p: 2, m: 2, width: "100%" }}>Feature not found</Card>

  const widgetNames = Object.keys(generalAttendanceFeatureConfig).map(widgetName => widgetName)

  const widgets = useWidgets(widgetNames)

  return (
    <Card sx={{ width: "100%", height: "auto", padding: "9px 32px", boxShadow: "0px 4px 6px 0px #0000001A" }}>
        <Typography variant="H6" color="primary">
            General Attendance Feature
        </Typography>

        <Stack direction="row" sx={{justifyContent: "space-between"}}>
            {widgets.map((Widget, index) => 
                Widget && <Widget key={index} />
            )}
        </Stack>
    </Card>
  );
};

export default GeneralAttendanceFeature
