import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AppState {
  vertical?: string
}

const initialState: AppState = {
  vertical: undefined,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setVertical: (state, action: PayloadAction<{ vertical: string }>) => {

      return {
        vertical: action.payload.vertical,
      }
    }
  }
})

export const { setVertical } = appSlice.actions

export default appSlice.reducer
