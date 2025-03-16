import { Card, Stack, Typography } from "@mui/material";

import { useFeature } from "@/core/ui/hooks/useFeatures";

export const HeaderFeature = () => {
    // const HeaderFeature = useFeature("HeaderFeature")
    const HeaderToolbarFeature = useFeature("HeaderToolbarFeature")

    // console.log("HeaderFeature:::process.env.VITE_FIREBASE_API_KEY:::", import.meta.env.VITE_FIREBASE_API_KEY)

    return (
        HeaderToolbarFeature ? <HeaderToolbarFeature /> : <Card sx={{ p: 2, m: 2, width: "100%" }}>Feature not found</Card>
    )
}
