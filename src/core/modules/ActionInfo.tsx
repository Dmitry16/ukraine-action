import { FC } from "react"
import { Box, Typography, Paper } from "@mui/material"

const ACTIONS: Record<string, { title: string; description: string }> = {
  rossio: {
    title: "Rossio Square Gathering",
    description: "A peaceful demonstration held at Rossio Square to raise awareness and show solidarity."
  },
  drones: {
    title: "Drone Footage Operation",
    description: "Drones were deployed to capture activity in key areas and ensure crowd safety."
  },
  sunset: {
    title: "Sunset Vigil at Caparica",
    description: "Participants gathered at the beach to light candles and hold a silent vigil during sunset."
  }
}

type ActionInfoProps = {
  image: string
}

const ActionInfo: FC<ActionInfoProps> = ({ image }) => {
  const key = Object.keys(ACTIONS).find((k) => image.includes(k))
  const info = key ? ACTIONS[key] : { title: "", description: "" }

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          {info.title || "No Action Info"}
        </Typography>
        <Typography variant="body1">
          {info.description || "There is no description available for this action."}
        </Typography>
      </Box>
    </Paper>
  )
}

export default ActionInfo
