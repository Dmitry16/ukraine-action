import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets, useWidget } from "@/core/ui/hooks/useWidgets";
import { useComponents } from "@/core/ui/hooks/useComponents";
import { useFeature } from "@/core/ui/hooks/useFeatures";
import { Card, Typography, Box } from "@mui/material";

export const HeaderFeature = () => {
    // const constructionConfig = useConfig("construction")
    // const headerFeature = constructionConfig?.dashboard?.header?.headerFeature || []
    
    // // const widgets = useWidget(headerFeature[0].widget)
    // const widgets = useWidgets(headerFeature.map(w => w.widget))

    // console.log("headerFeature::::", headerFeature)
    // console.log("widgets::::", widgets)
    const HeaderToolbarFeature = useFeature("HeaderToolbarFeature")
    
    return (
        HeaderToolbarFeature ? <HeaderToolbarFeature /> : <Card sx={{ p: 2, m: 2, width: "100%" }}>Feature not found</Card>
    )
}
