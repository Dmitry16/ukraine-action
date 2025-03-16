import { useSelector } from "react-redux"
import { Stack } from "@mui/material"

import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets } from "@/core/ui/hooks/useWidgets"

import { Card } from "../../../partials/index"

const HeaderToolbarFeature = () => {
  const vertical = useSelector((state: any) => state.app.vertical)
  const verticalConfig = useConfig(vertical)

  const headerFeatureConfig = verticalConfig?.dashboard?.header?.headerToolbarFeature || []
  const widgetNames = Object.keys(headerFeatureConfig).map(widgetName => widgetName)

  const widgets = useWidgets(widgetNames)

  return (
    <Card sx={{ width: "100%", height: "52px", padding: "9px 32px", boxShadow: "0px 4px 6px 0px #0000001A" }}>
      <Stack direction="row" sx={{justifyContent: "space-between"}}>
          {widgets.map((Widget, index) => 
              Widget && <Widget key={index} />
          )}
      </Stack>
    </Card>
  );
};

export default HeaderToolbarFeature
