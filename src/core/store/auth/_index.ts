import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { rootReducer, rootSaga } from "../rootReducer"
import { loadState, saveState } from "../persistState"

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

const sagaMiddleware = createSagaMiddleware()

const preloadedState: Partial<RootState> = loadState()

export const store = configureStore({
  reducer: rootReducer,
  // preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: false, // disable thunk since we use saga
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
})

sagaMiddleware.run(rootSaga)

// persist state changes
store.subscribe(() => {
  saveState(store.getState())
})

export default store
