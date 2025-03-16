import { useSelector } from "react-redux"
import { useConfig } from "@/core/config/hooks/useConfig"
import useGenerateWidget from "@/lib/widgets/hooks/useGenerateWidget"
import { Widget } from "@/core/config/verticals/types"

const ToolbarRightWidget = () => {
    const vertical = useSelector((state: any) => state.app.vertical)
    const verticalConfig = useConfig(vertical)
    const widgetConfig = (verticalConfig?.dashboard?.header?.headerToolbarFeature?.ToolbarRightWidget || {}) as Widget

    return useGenerateWidget(widgetConfig)
}

export default ToolbarRightWidget
