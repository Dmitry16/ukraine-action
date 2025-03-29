import { User } from "firebase/auth"
import { put, takeLatest, call } from "redux-saga/effects"

import { auth } from "../../services/db/firebase"
import { login as authLogin, getCurrentUser, getUserClaims, getUserPermissions, TenantResult, MultiTenantResult } from "../../services/auth/AuthService"
import { appSignIn, login, logout, register, userLoaded, setUserClaims, setUserPermissions } from "./authSlice"


export function* loginSaga(action: any) {
  // these are the actions that should be dispatched from the login component
  // const { setSnackBarOpen, setLoading, setCustomerSelection, dispatch } = action.payload
  try {
      // setLoading(true)
      // console.log("loginSaga:::action:::", action)

      // authLogin(action.payload.email, action.payload.password, action.payload.tenantID)
      yield authLogin(action.payload.email, action.payload.password)
        .then((response: any) => {
          // setLoading(false)

          // console.log("loginSaga:::response:::", response)
  
          if (!response) {
            console.error("Login failed: No response received")
            return
          }
  
          // if (isMultiTenantResult(response)) {
          //   const customers = response.customers.map(val =>
          //     val.tenantID ? val : { ...val, tenantID: "superAdmin" }
          //   )
          //   setCustomerSelection(customers)
          //   return
          // }
  
          // If not a multi-tenant result, assume it's a regular User
          put(login({ authToken: response.uid }))
        })
        .catch(error => {
          // setSnackBarOpen(error?.message || "An error occurred. Please try again.")
          // setLoading(false)
        })

        yield put({ type: "auth/userRequested" })

  } catch (error) {
    console.error("Login saga error:", error)
  }
}

export function* logoutSaga() {
  try {
    yield call(() => auth.signOut())
    yield put(userLoaded(null))
  } catch (error) {
    console.error("Logout saga error:", error)
  }
}

export function* userRequestedSaga(): Generator {
  try {
    const user: User | null = yield call(getCurrentUser)

    // console.log("userRequestedSaga::::user:::", user) 

    if (!user) {
      yield put(userLoaded(null))
      return
    }

    const userData = {
      username: user.displayName ?? null,
      email: user.email ?? null,
      phone: user.phoneNumber ?? null,
      pic: user.photoURL ?? null,
      accessToken: user.uid,
      refreshToken: user.refreshToken,
      metadata: user.metadata ? true : false,
      emailVerified: user.emailVerified,
      id: user.uid,
      fullname: user.displayName ?? null,
      tenantId: user.tenantId ?? null,
      isLoggedin: true
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

function* authSaga() {
  yield takeLatest(appSignIn.type, loginSaga)
  // yield takeLatest(login.type, loginSaga)
//   yield takeLatest(register.type, registerSaga)
  yield takeLatest(logout.type, logoutSaga)
  yield takeLatest("auth/userRequested", userRequestedSaga)
}

export default authSaga
