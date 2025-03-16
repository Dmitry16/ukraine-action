import { Card, CardContent, Typography, useTheme } from "@mui/material"
import { useComponents } from "@/core/ui/hooks/useComponents"

const CardComponent = () => {
  const theme = useTheme()
  const componentsArr = useComponents(["SampleComponent2"])

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          Sample Widget 2
        </Typography>
        {componentsArr.map((Component, index) =>
          Component ? <Component key={index} /> : <p key={index}>Component not found</p>
        )}
      </CardContent>
    </Card>
  )
}

export default CardComponent
