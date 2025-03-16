import { Stack } from "@mui/material"

import { useComponents } from "@/core/ui/hooks/useComponents"
import { Widget } from "@/core/config/verticals/types"

const useGenerateWidget = (widget: Widget) => {
    const componentsNames = widget?.components?.map(component => component.name)
    const components = componentsNames && useComponents(componentsNames)

    return (
        <Stack direction="row" gap={'20px'} alignItems="center">
            {components?.map((Component, index) => {
                return Component ? <Component key={index} /> : <p key={index}>Component not found</p>
            })}
        </Stack>
    )
}

export default useGenerateWidget
