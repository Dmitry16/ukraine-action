import { useEffect } from 'react'
import { Effect } from 'effect'
import DashboardCard from './components/DashboardCard'
import { useDbService } from '@/core/services/hooks/useServices'
import { HeaderFeature } from './features/HeaderFeature'
import { Grid, Box } from '@mui/system'
import { Typography } from '@mui/material'
import { TopRowInfoFeature } from './features/TopRowInfoFeature'
import { GeneralAttendanceFeature } from './features/GeneralAttendanceFeature'

const Dashboard = () => {
  // const runnableDbEffect = useDbService("SELECT * FROM users")

  // useEffect(() => {
  //   Effect.runPromise(runnableDbEffect).then((result) => console.log("Dashboard module:::Result from DB:::", result))
  //   Effect.runPromise(runnableDbEffect).then(console.log)
  // }, [])

  return (
    <Grid container spacing={2} flexDirection={"column"}>
      <HeaderFeature />
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "100px" }}>
        <Typography variant="H4">Construction Dashboard</Typography>
      </Box>
      <TopRowInfoFeature />
      <GeneralAttendanceFeature />
    </Grid>
  )
}

export default Dashboard
