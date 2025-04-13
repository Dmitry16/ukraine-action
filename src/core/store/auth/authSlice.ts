import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { sign } from "crypto"

export interface AuthState {
  user?: any
  claims?: any
  authToken?: string
  permissions?: any
  database?: any
  email: string
  password: string
}

const initialState: AuthState = {
  user: undefined,
  claims: undefined,
  authToken: undefined,
  database: undefined,
  email: "",
  password: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    appSignIn: (state, action) => {
      // console.log("authSlice:::appSignIn:::", action)

      state.email = action.payload.email
      state.password = action.payload.password
    },
    login: (state, action: PayloadAction<{ authToken: string }>) => {
      // console.log("authSlice:::login:::", action)

      state.authToken = action.payload.authToken
      state.user = undefined
    },

    register: (state, action: PayloadAction<{ authToken: string }>) => {
      state.authToken = action.payload.authToken
      state.user = undefined
    },

    logout: () => initialState,

    userLoaded: (state, action: PayloadAction<any>) => {
      console.log("authSlice:::userLoaded", action.payload)

      state.user = action.payload
    },

    setUserClaims: (state, action: PayloadAction<any>) => {
      state.claims = action.payload
    },

    setUserPermissions: (state, action: PayloadAction<any>) => {
      state.permissions = action.payload
    },

    setDatabase: (state, action: PayloadAction<any>) => {
      state.database = action.payload
    }
  }
})

export const {
  appSignIn,
  login,
  register,
  logout,
  userLoaded,
  setUserClaims,
  setUserPermissions,
  setDatabase
} = authSlice.actions

export default authSlice.reducer
