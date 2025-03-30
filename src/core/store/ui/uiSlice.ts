import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Space, Layout, Feature, Widget, Component } from "../../types/uiTypes"
import { adjust } from "effect/TestClock"

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
    }
    
  }
})

export const { actions, reducer } = uiSlice
