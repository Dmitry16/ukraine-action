import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Effect } from "effect"
import { User } from "firebase/auth"
// import { put, takeLatest } from "redux-saga/effects"
// import { getCurrentUser, getUserClaims, getUserPermissions } from "./authCrud"
// import * as routerHelpers from "../../../routes/RouterHelpers"
// import { auth } from "../../../../firebase"

// 🔹 Effect-based serialization
// const serializeState = (state: any) =>
//   Effect.sync(() => JSON.stringify(state))

// const deserializeState = (stateString: string) =>
//   Effect.sync(() => JSON.parse(stateString))

export const actionTypes = {
	Login: "[Login] Action",
	Logout: "[Logout] Action",
	Register: "[Register] Action",
	UserRequested: "[Request User] Action",
	UserLoaded: "[Load User] Auth API",
	SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
	getUserClaims: "GET_USER_CLAIMS",
	getUserPermissions: "GET_USER_PERMISSIONS",
	setUserPermissions: "SET_USER_PERMISSIONS",
	setDatabase: "SET_DATABASE"
} as const

interface LoginAction {
  type: typeof actionTypes.Login
  payload: { authToken: string }
}

interface RegisterAction {
  type: typeof actionTypes.Register
  payload: { authToken: string }
}

interface LogoutAction {
  type: typeof actionTypes.Logout
}

interface UserRequestedAction {
  type: typeof actionTypes.UserRequested
  payload: { user: User | null }
}

interface UserLoadedAction {
  type: typeof actionTypes.UserLoaded
  payload: { user: User | null }
}

interface SignInFailureAction {
  type: typeof actionTypes.SIGN_IN_FAILURE
  payload: { error: string }
}

interface SetUserClaimsAction {
  type: typeof actionTypes.getUserClaims
  payload: { claims: Record<string, any> }
}

interface SetUserPermissionsAction {
  type: typeof actionTypes.setUserPermissions
  payload: { permissions: string[] }
}

interface SetDatabaseAction {
  type: typeof actionTypes.setDatabase
  payload: { database: string }
}

interface FetchUserPermissionsAction {
  type: typeof actionTypes.getUserPermissions
}

// ✅ Define a union type for all actions (useful for reducers)
export type AuthActionTypes =
  | LoginAction
  | RegisterAction
  | LogoutAction
  | UserRequestedAction
  | UserLoadedAction
  | SignInFailureAction
  | SetUserClaimsAction
  | SetUserPermissionsAction
  | SetDatabaseAction
  | FetchUserPermissionsAction

// ✅ Strongly typed Redux actions
export const actions = {
  login: (authToken: string): LoginAction => ({
    type: actionTypes.Login,
    payload: { authToken }
  }),

  register: (authToken: string): RegisterAction => ({
    type: actionTypes.Register,
    payload: { authToken }
  }),

  logout: (): LogoutAction => ({
    type: actionTypes.Logout
  }),

  requestUser: (user: User | null): UserRequestedAction => ({
    type: actionTypes.UserRequested,
    payload: { user }
  }),

  fulfillUser: (user: User | null): UserLoadedAction => ({
    type: actionTypes.UserLoaded,
    payload: { user }
  }),

  signInFailure: (error: string): SignInFailureAction => ({
    type: actionTypes.SIGN_IN_FAILURE,
    payload: { error }
  }),

  setUserClaims: (claims: Record<string, any>): SetUserClaimsAction => ({
    type: actionTypes.getUserClaims,
    payload: { claims }
  }),

  setUserPermissions: (permissions: string[]): SetUserPermissionsAction => ({
    type: actionTypes.setUserPermissions,
    payload: { permissions }
  }),

  setDatabase: (database: string): SetDatabaseAction => ({
    type: actionTypes.setDatabase,
    payload: { database }
  }),

  fetchUserPermissions: (): FetchUserPermissionsAction => ({
    type: actionTypes.getUserPermissions
  })
}

export interface AuthState {
  user?: any
  claims?: any
  authToken?: string
  permissions?: any
  database?: any
}

const initialState: AuthState = {
  user: undefined,
  claims: undefined,
  authToken: undefined,
  database: undefined
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ authToken: string }>) => {
      console.log("authRedux:::createSlice:::login", action.payload.authToken)

      state.authToken = action.payload.authToken
      state.user = undefined
    },
    register: (state, action: PayloadAction<{ authToken: string }>) => {
      state.authToken = action.payload.authToken
      state.user = undefined
    },
    logout: () => initialState,
    userLoaded: (state, action: PayloadAction<any>) => {
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
  login,
  register,
  logout,
  userLoaded,
  setUserClaims,
  setUserPermissions,
  setDatabase
} = authSlice.actions

export default authSlice.reducer
