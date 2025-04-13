import { Typography, useTheme } from "@mui/material"
import { useSelector } from "react-redux"

import { useConfig } from "@/core/config/hooks/useConfig"
import { useComponents } from "@/core/ui/hooks/useComponents"
import { Card, CardBody } from "../../partials"

export const UserInfoWidget = () => {
  const theme = useTheme()
  const vertical = useSelector((state: any) => state.app.vertical)
  const verticalConfig = useConfig(vertical)

  const components = verticalConfig?.dashboard?.body?.generalAttendanceFeature?.UserInfoWidget.components || []

  if (!components.length) return <Card sx={{ p: 2, m: 2, width: "100%" }}>Config for widget is not defined</Card>

  const componentNames = components.map(component => component.name || "no component with such name") || []

  const componentsArr = useComponents(componentNames)

  return (
    <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "100%", mx: "auto", boxShadow: 3 }}>
      <Typography variant="H5" color={theme.utilitarian.red[100]}>
        General Attendance Table Widget
      </Typography>
      <CardBody sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", m: 0, p: 0 }}>
        {componentsArr.map((Component, index) =>
          Component ? <Component key={index} /> : <p key={index}>Component not found</p>
        )}
      </CardBody>
    </Card>
  )
}

export default UserInfoWidget
