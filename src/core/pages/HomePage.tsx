import { FC, useState } from "react"
import { Grid, Box } from "@mui/system"
import { Typography } from "@mui/material"

import HeaderToolbarFeature from "@/lib/features/header/toolbar/HeaderToolbarFeature"
import TopRowInfoFeature from "@/lib/features/body/TopRowInfoFeature"
import LisbonMap from "../modules/LisbonMap"
import PictureCarousel from "../modules/PictureCarousel"

const DEFAULT_PICS = [
    "public/pictures/rossio.JPG",
    "public/pictures/drones.JPG",
]

const HomePage: FC = () => {
    const [pics, setPics] = useState(DEFAULT_PICS)
    return (
        <Grid container spacing={2} flexDirection={"column"}>
            <HeaderToolbarFeature />

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "100px" }}>
                <Typography variant="H4">Ukraine in Action</Typography>
            </Box>
            <TopRowInfoFeature />
            <Grid container spacing={2} flexDirection={"row"}>
                <Grid size={6}>
                    <PictureCarousel images={pics}/>
                </Grid>
                <Grid size={6}>
                    <LisbonMap />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomePage
