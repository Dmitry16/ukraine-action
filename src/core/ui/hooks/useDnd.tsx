import { useState, useCallback } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type UseDndOptions = {
  items: string[]
  onOrderChange?: (newOrder: string[]) => void
}

export const useDnd = ({ items, onOrderChange }: UseDndOptions) => {
  const [orderedItems, setOrderedItems] = useState<string[]>(items)

  const sensors = useSensors(useSensor(PointerSensor))

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event
      if (active.id !== over?.id) {
        const oldIndex = orderedItems.indexOf(active.id as string)
        const newIndex = orderedItems.indexOf(over!.id as string)
        const newOrder = arrayMove(orderedItems, oldIndex, newIndex)
        setOrderedItems(newOrder)
        onOrderChange?.(newOrder)
      }
    },
    [orderedItems, onOrderChange]
  )

  const Draggable = ({ children }: { children: (id: string) => React.ReactNode }) => (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={orderedItems} strategy={verticalListSortingStrategy}>
        {orderedItems.map(id => (
          <SortableItem key={id} id={id}>
            {children(id)}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  )

  return Draggable
}

const SortableItem = ({ id, children }: { id: string, children: React.ReactNode }) => {
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
