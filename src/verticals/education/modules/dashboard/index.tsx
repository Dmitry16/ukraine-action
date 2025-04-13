import { HeaderFeature } from './features/Header'
import { Grid, Box } from '@mui/system'
import { Typography } from '@mui/material'
import { TopRowInfoFeature } from './features/TopRowInfoFeature'
import { GeneralAttendanceFeature } from './features/GeneralAttendanceFeature'

const Dashboard = () => {

  return (
    <Grid container spacing={2} flexDirection={"column"}>
      <HeaderFeature />

      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "100px" }}>
        <Typography variant="H4">Dashboard</Typography>
      </Box>

      <TopRowInfoFeature />
      <GeneralAttendanceFeature />
    </Grid>
  )
}

export default Dashboard
