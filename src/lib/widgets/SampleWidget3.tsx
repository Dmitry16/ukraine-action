import { Card, CardContent, Typography } from "@mui/material"

const CardComponent = () => {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" color="primary" gutterBottom>
          Sample Widget 3
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          This is a placeholder component using Material UI.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardComponent
