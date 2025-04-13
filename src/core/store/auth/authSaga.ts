import { User } from "firebase/auth"
import { put, takeLatest, call } from "redux-saga/effects"

import { auth } from "../../services/db/firebase"
import { login as authLogin, getCurrentUser, getUserClaims, getUserPermissions, TenantResult, MultiTenantResult } from "../../services/auth/AuthService"
import { appSignIn, login, logout, register, userLoaded, setUserClaims, setUserPermissions } from "./authSlice"
import { cons } from "effect/List"
import { an } from "node_modules/framer-motion/dist/types.d-B50aGbjN"


export function* loginSaga(action: any) {
  try {
      yield authLogin(action.payload.email, action.payload.password)
        .then((response: any) => {
          if (!response) {
            console.error("Login failed: No response received")
            return
          }

          // const idToken = response.user.getIdToken();

          console.log("LoginSaga::::response:::", response)

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

async function fetchUserProfile(user: any): Promise<any> {
  if (!user) {
    return null
  }
  try {
    const response = await fetch('http://localhost:3000/users/getUserProfile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user?.stsTokenManager?.accessToken}`,
      },
    })
    const data = await response.json()

    // console.log("fetchUserProfile::::data:::", data)

    return data
  } catch (error) {
    console.error('Error fetching user metadata:', error)
    return null
  }
}

export function* userRequestedSaga(): Generator {
  try {
    const user: User | null = yield call(getCurrentUser)

    const userProfile = yield call(fetchUserProfile, user)

    console.log("userRequestedSaga::::userProfile:::", userProfile) 

    if (!user) {
      yield put(userLoaded(null))
      return
    }

    const userData = {
      name: userProfile.name ?? null,
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
