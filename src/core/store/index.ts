import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { loadState, saveState } from "./persistState"

import { rootReducer, rootSaga } from "./rootReducer"

export type RootState = ReturnType<typeof rootReducer>

const preloadedState: Partial<RootState> = loadState()

console.log("preloadedState:::", preloadedState)

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

// persist state changes
store.subscribe(() => {
  saveState(store.getState())
})

export default store
