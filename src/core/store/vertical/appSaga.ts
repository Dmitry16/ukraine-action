import { put, takeLatest } from "redux-saga/effects"
import {setVertical } from "./appSlice"

export function* setVerticalSaga(action: ReturnType<typeof setVertical>) {
    try {
        // yield put({ type: "vertical/verticalSet", payload: action.payload  })
    } catch (error) {
        console.error("setVertical saga error:", error)
    }
}

function* verticalSaga() {
    // yield takeLatest(setVertical.type, setVerticalSaga)
}

export default verticalSaga
