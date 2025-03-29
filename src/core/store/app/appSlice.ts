import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Customer } from "../../types/repositoryTypes"

export interface AppState {
  vertical?: string
  customers?: Customer[]
}

const initialState: AppState = {
  vertical: undefined,
  customers: undefined,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setVertical: (state, action: PayloadAction<{ vertical: string }>) => {
      return {
        ...state,
        vertical: action.payload.vertical,
      }
    },
    setCustomers: (state, action: PayloadAction<Customer[] | null>) => {
      // console.log("setCustomers:::action.payload:::", action.payload)

      return {
        ...state,
        customers: action.payload || [],
      }
    },
  }
})

export const { actions, reducer } = appSlice
