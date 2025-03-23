import { FC, useState, useCallback } from "react"
import { Grid, Box } from "@mui/system"
import { Typography } from "@mui/material"

import HeaderToolbarFeature from "@/lib/features/header/toolbar/HeaderToolbarFeature"
import TopRowInfoFeature from "@/lib/features/body/TopRowInfoFeature"
import LisbonMap from "../modules/LisbonMap"
import PictureCarousel from "../modules/PictureCarousel"

const DEFAULT_PICS = [
  "public/pictures/rossio.JPG",
  "public/pictures/drones.JPG",
  "public/pictures/sunset.JPG",
]

const HomePage: FC = () => {
  const [pics, setPics] = useState(DEFAULT_PICS)
  const [image, setImage] = useState(pics[0])

  const handleImageChange = useCallback((src: string) => {
    setImage(src)
  }, [])

  return (
    <Grid container spacing={2} flexDirection={"column"}>
      <HeaderToolbarFeature />

      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "100px" }}>
        <Typography variant="h4">Ukraine in Action</Typography>
      </Box>
      <TopRowInfoFeature />
      <Grid container spacing={2} flexDirection={"row"}>
        <Grid size={6}>
          <PictureCarousel images={pics} onImageChange={handleImageChange} />
        </Grid>
        <Grid size={6}>
          <LisbonMap image={image} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage
