import { put, takeLatest, call } from "redux-saga/effects"
import { login, logout, register, userLoaded, setUserClaims, setUserPermissions } from "./authSlice"
import { getCurrentUser, getUserClaims, getUserPermissions } from "../../services/auth/AuthService"
import { auth } from "../../services/db/firebase"
import { User } from "firebase/auth"

export function* loginSaga() {
  yield put({ type: "auth/userRequested" })
}

export function* registerSaga() {
  yield put({ type: "auth/userRequested" })
}

export function* logoutSaga() {
  try {
    yield call(() => auth.signOut())
    console.log("Logout success")
  } catch (error) {
    console.error("Sign out failed", error)
  }
}

export function* userRequestedSaga(): Generator {
  try {
    const user: User | null = yield call(getCurrentUser)

    if (!user) {
      yield put(userLoaded(null))
      return
    }

    const userData = {
      username: user.displayName ?? "Unknown User", // Default value if displayName is null
      email: user.email ?? "",
      phone: user.phoneNumber ?? "",
      pic: user.photoURL ?? "",
      accessToken: user.uid,
      refreshToken: user.refreshToken,
      metadata: user.metadata,
      emailVerified: user.emailVerified,
      id: user.uid,
      fullname: user.displayName ?? "",
      tenantId: user.tenantId ?? ""
    }

    // Fetch claims and permissions if needed
    // const userClaims = yield call(() => getUserClaims(user))
    // const profileLvl = getProfileLvl(userClaims)
    // yield put(setUserClaims({ ...userClaims, profileLvl }))

    // const permissions = yield call(() => getUserPermissions(userClaims))
    // yield put(setUserPermissions(permissions ?? mockPermissions))

    yield put(userLoaded(userData))
  } catch (error) {
    console.error("Error loading user:", error)
  }
}

export function* authSaga() {
  yield takeLatest(login.type, loginSaga)
  yield takeLatest(register.type, registerSaga)
  yield takeLatest(logout.type, logoutSaga)
  yield takeLatest("auth/userRequested", userRequestedSaga)
}
