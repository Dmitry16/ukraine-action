import { Card, CardContent, Typography, useTheme } from "@mui/material"
import { useComponents } from "@/core/ui/hooks/useComponents"

const CardComponent = () => {
  const theme = useTheme()
  const componentsArr = useComponents(["SampleComponent1", "SampleComponent2"])

  return (
    <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70px", height: "30px", boxShadow: 3 }}>
      <Typography variant="M" color={theme.utilitarian.red[100]}>
        Widget 4
      </Typography>
      {/* <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", maxHeight: "300px", m: 0, p: 0 }}>
      </CardContent> */}
    </Card>
  )
}

export default CardComponent
