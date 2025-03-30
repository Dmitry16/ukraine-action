import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Space, Layout, Feature, Widget, Component } from "../../types/uiTypes"

export interface UiState {
    vertical?: string
    space?: Space
    // layout?: Layout
}

const initialState: UiState = {
  space: undefined,
  vertical: undefined,

}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSpace: (state, action: PayloadAction<{ space: Space }>) => {
        state.space = action.payload.space
    },
    setLayout: (state, action: PayloadAction<{ layout: Layout }>) => {
        if (!state.space) return
        console.log("uiSlice:::setLayout:::action.payload.layout:::", action.payload.layout)

        state.space.layout = action.payload.layout
    },
    updateWidgetOrder: (
        state,
        action: PayloadAction<{
          page: string
          section: string
          featureKey: string
          widgetOrder: string[]
        }>
      ) => {
        console.log("uiSlice:::updateWidgetOrder:::action.payload:::", action.payload)
      
        const layout = state.space?.layout
        if (!layout) return
      
        const { page, section, featureKey, widgetOrder } = action.payload
      
        // Only handling dashboard for now
        const pageConfig = layout[page]
        if (!pageConfig) return
      
        const sectionConfig = pageConfig[section]
        if (!sectionConfig) return
      
        const feature = sectionConfig[featureKey]
        if (!feature) return
      
        // Rebuild the widget map in new order
        const updatedFeature: Record<string, any> = {}
      
        widgetOrder.forEach(widgetKey => {
          if (feature[widgetKey]) {
            updatedFeature[widgetKey] = feature[widgetKey]
          }
        })
      
        updatedFeature.widgetOrder = widgetOrder
      
        sectionConfig[featureKey] = updatedFeature
      }
      
      
  }
})

export const { actions, reducer } = uiSlice
