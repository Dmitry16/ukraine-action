import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface VerticalState {
  vertical?: any
}

const initialState: VerticalState = {
  vertical: undefined,
}

export const verticalSlice = createSlice({
  name: "vertical",
  initialState,
  reducers: {

    setVertical: (state, action: PayloadAction<{ vertical: string }>) => {
        // console.log("verticalSlice:::setVertical:::", action.payload)

        state.vertical = action.payload.vertical
    },

    changeVertical: (state, action: PayloadAction<{ vertical: string }>) => {
        // console.log("verticalSlice:::changeVertical:::", action.payload)

        state.vertical = action.payload.vertical
    },
  }
})

export const {
    setVertical,
    changeVertical,
} = verticalSlice.actions

export default verticalSlice.reducer
