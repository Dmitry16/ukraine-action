import { Stack, Typography } from "@mui/material"
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { RootState } from "@/core/store"
import { actions } from "@/core/store/ui/uiSlice"

import { useConfig } from "@/core/config/hooks/useConfig"
import { useWidgets } from "@/core/ui/hooks/useWidgets"
import { Card } from "../../partials"

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core"

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable"

import { CSS } from "@dnd-kit/utilities"
import { useState } from "react"

const SortableWidget = ({ id, children }: { id: string, children: React.ReactNode }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab'
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

const TopRowInfoFeature = () => {
  const dispatch = useDispatch()
  const vertical = useSelector((state: any) => state.app.vertical)
  const space = useSelector((state: RootState) => state.ui?.space, shallowEqual)

  const config = space?.layout ? space.layout : useConfig(vertical)
  const topRowInfoFeatureConfig = config?.dashboard?.body?.topRowInfoFeature || {}

  const rawOrder = config?.dashboard?.body?.topRowInfoFeature?.widgetOrder
  const widgetNames = Array.isArray(rawOrder)
    ? rawOrder as string[]
    : Object.keys(topRowInfoFeatureConfig).filter(key => key !== 'widgetOrder')

  const [orderedWidgets, setOrderedWidgets] = useState<string[]>(widgetNames)

  const widgets = useWidgets(orderedWidgets)

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const oldIndex = orderedWidgets.indexOf(active.id)
      const newIndex = orderedWidgets.indexOf(over.id)
      const newOrder = arrayMove(orderedWidgets, oldIndex, newIndex)

      setOrderedWidgets(newOrder)

      dispatch(actions.updateWidgetOrder({
        page: 'dashboard',
        section: 'body',
        featureKey: 'topRowInfoFeature',
        widgetOrder: newOrder
      }))
    }
  }

  return (
    <Card sx={{ width: "100%", height: "52px", padding: "9px 32px", boxShadow: "0px 4px 6px 0px #0000001A" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="H6" color="primary">
          Top Row Info Feature
        </Typography>

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={orderedWidgets} strategy={verticalListSortingStrategy}>
            <Stack direction="row" spacing={2}>
              {widgets.map((Widget, index) =>
                Widget ? (
                  <SortableWidget key={orderedWidgets[index]} id={orderedWidgets[index]}>
                    <Widget />
                  </SortableWidget>
                ) : null
              )}
            </Stack>
          </SortableContext>
        </DndContext>
      </Stack>
    </Card>
  )
}

export default TopRowInfoFeature
