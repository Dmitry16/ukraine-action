import { Card } from "@mui/material";

import { useFeature } from "@/core/ui/hooks/useFeatures";

export const TopRowInfoFeature = () => {
    const TopRowInfoFeature = useFeature("TopRowInfoFeature")

    return (
        TopRowInfoFeature ? <TopRowInfoFeature /> : <Card sx={{ p: 2, m: 2, width: "100%" }}>Feature not found</Card>
    )
}
