import { Stack } from "@mui/material"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { RootState } from "@/core/store"
import { actions } from "@/core/store/ui/uiSlice"

import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets } from "@/core/ui/hooks/useWidgets"
import { Card } from "../../partials"
import { useDnd } from "@/core/ui/hooks/useDnd"

const TopRowInfoFeature = () => {
  const dispatch = useDispatch()
  const vertical = useSelector((state: any) => state.app.vertical)
  const space = useSelector((state: RootState) => state.ui?.space, shallowEqual)
  const isCustomStarted = useSelector((state: RootState) => state.ui?.space?.layout?.isCustomStarted)

  console.log("TopRowInfoFeature:::space:::", space)
  console.log("TopRowInfoFeature:::isCustomStarted:::", isCustomStarted)

  const config = space?.layout ? space.layout : useConfig(vertical)
  const topRowInfoFeatureConfig = config?.dashboard?.body?.topRowInfoFeature || {}


  const rawOrder = config?.dashboard?.body?.topRowInfoFeature?.widgetOrder
  const widgetNames = Array.isArray(rawOrder)
    ? rawOrder as string[]
    : Object.keys(topRowInfoFeatureConfig).filter(key => key !== 'widgetOrder')

  const widgets = useWidgets(widgetNames)

  const Draggable = useDnd({
    items: widgetNames,
    onOrderChange: newOrder => {
      dispatch(actions.updateWidgetOrder({
        page: 'dashboard',
        section: 'body',
        featureKey: 'topRowInfoFeature',
        widgetOrder: newOrder
      }))
    }
  })

  return (
    <Card sx={{ width: "100%", height: "52px", padding: "9px 32px", boxShadow: "0px 4px 6px 0px #0000001A" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        {isCustomStarted ? (
          <Draggable>
            {id => {
              const Widget = widgets[widgetNames.indexOf(id)]
              return Widget ? <Widget /> : null
            }}
          </Draggable>
        ) : (
          <>
            {widgetNames.map((id, index) => {
              const Widget = widgets[index]
              return Widget ? <Widget key={id} /> : null
            })}
          </>
        )}
      </Stack>
    </Card>
  )
}

export default TopRowInfoFeature
