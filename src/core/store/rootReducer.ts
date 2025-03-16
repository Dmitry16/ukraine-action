import { all } from "redux-saga/effects"
import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "./auth/authSlice"
import authSaga from "./auth/authSaga"
import verticalSaga from "./vertical/appSaga"
import appReducer from "./vertical/appSlice"

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
})

export function* rootSaga() {
  yield all([authSaga(), verticalSaga()])
}

export type RootState = ReturnType<typeof rootReducer>
