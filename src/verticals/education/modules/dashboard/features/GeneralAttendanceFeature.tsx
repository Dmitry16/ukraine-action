import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets, useWidget } from "@/core/ui/hooks/useWidgets";
import { useComponents } from "@/core/ui/hooks/useComponents";
import { Card, Typography } from "@mui/material";
import { useFeature } from "@/core/ui/hooks/useFeatures";

export const GeneralAttendanceFeature = () => {
    const GeneralAttendanceFeature = useFeature("GeneralAttendanceFeature")

    return (
        GeneralAttendanceFeature ? <GeneralAttendanceFeature /> : <Card sx={{ p: 2, m: 2, width: "100%" }}>Feature not found</Card>
    )
}
