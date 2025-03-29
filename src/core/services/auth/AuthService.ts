import _ from "lodash"

import { auth } from "../db/firebase"

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  QuerySnapshot
} from "firebase/firestore"

import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  UserCredential,
  User,
} from "firebase/auth"

export interface TenantResult {
  tenantID: string
  customerName?: string
}

export interface MultiTenantResult {
    multipleTenants: boolean
    customers: TenantResult[]
}
  
type LoginResponse = User | MultiTenantResult | null

export async function login(
    email: string,
    password: string,
    _tenantID: string | null = null
): Promise<LoginResponse> {
    if (!email || !password) return null
  
    // const domain = email.substring(email.lastIndexOf("@") + 1)
    // let tenantID = _tenantID
  
    // const loginDataRef = collection(getFirestore(), "LoginData")

    // // console.log("AuthService:::login -> loginDataRef::::", loginDataRef)
    // // console.log("AuthService:::login -> domain::::", domain)
  
    // let querySnapshot: QuerySnapshot | undefined
  
    // if (!tenantID) {
    //   querySnapshot = await getDocs(
    //     query(
    //       loginDataRef,
    //       where("domain", "==", domain),
    //       where("customerType", "==", "ua")
    //     )
    //   )
    // }

    // // console.log("AuthService:::login -> querySnapshot::::", querySnapshot)
  
    // if (querySnapshot?.docs.length && querySnapshot.docs.length > 1) {
    //   const results = (
    //     await Promise.all(
    //       querySnapshot.docs.map(async val => {
    //         const tenant = val.data().tenantID
    //         auth.tenantId = tenant
  
    //         try {
    //           const signInMethods = await fetchSignInMethodsForEmail(auth, email)
    //           return signInMethods.length > 0 ? { tenantID: tenant, customerName: val.data().customerName } : null
    //         } catch (error) {
    //           console.error("Error fetching sign-in methods:", error)
    //           return null
    //         }
    //       })
    //     )
    //   ).filter(Boolean) as TenantResult[]

    //   console.log("AuthService:::login -> results::::", results)
  
    //   if (results.length > 1) {
    //     return { multipleTenants: true, customers: results }
    //   }
  
    //   tenantID = results[0].tenantID
    // }
  
    // if (querySnapshot?.docs.length === 1) {
    //   tenantID = querySnapshot.docs[0].data().tenantID
    // }
  
    // auth.tenantId = tenantID === "superAdmin" ? null : tenantID
  
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
      // console.log("AuthService:::login -> userCredential::::", userCredential)

      return userCredential.user
    } catch (error) {
        console.error(error)
      
        if (error instanceof Error && "code" in error) {
          const errorCode = (error as { code: string }).code
      
          throw new Error(
            errorCode === "auth/user-not-found"
              ? "User not found."
              : errorCode === "auth/wrong-password"
              ? "Incorrect password."
              : "An error occurred. Please try again."
          )
        }
      
        throw new Error("An unknown error occurred.")
    }
}
  
export async function requestPassword(email: string): Promise<Response | void> {
  const tenantID = await getTenantID(email)

  if (tenantID && typeof tenantID === "object" && tenantID.multipleTenants) {
    return Promise.any(
        tenantID.customers.map(val =>
          sendResetPasswordEmail(email, val.tenantID ?? null, val.customerName ?? null)
        )
    )
  } else if (typeof tenantID === "string") {
    return sendResetPasswordEmail(email, tenantID, null)
  }
}

function sendResetPasswordEmail(email: string, tenantID: string, customerName: string | null): Promise<Response> {
  const baseUrl = `${window.location.protocol}//${window.location.host}/`

  const myHeaders = new Headers()
  myHeaders.append("X-API-Key", process.env.REACT_APP_API_GATEWAY_KEY || "")
  myHeaders.append("Content-Type", "application/json")

  return fetch(`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/forgot-password`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ email, tenantId: tenantID, customerName, redirectUrl: baseUrl }),
    redirect: "follow"
  })
}

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const getUserClaims = async (user: User): Promise<Record<string, unknown> | null> => {
  try {
    const idToken = await user.getIdTokenResult()
    return _.omit(idToken.claims, [
      "aud",
      "auth_time",
      "email",
      "email_verified",
      "exp",
      "firebase",
      "iat",
      "iss",
      "sub",
      "user_id"
    ])
  } catch (error) {
    console.error("Error fetching custom claims:", error)
    return null
  }
}

export const getUserPermissions = async (userClaims: { userRole?: string }): Promise<Record<string, unknown> | null> => {
  if (!userClaims?.userRole) return null

  try {
    const roleDocRef = doc(getFirestore(), "DefaultRoles", userClaims.userRole)
    const roleDocSnapshot = await getDoc(roleDocRef)

    return roleDocSnapshot.exists() ? roleDocSnapshot.data() : null
  } catch (error) {
    console.error("Error fetching role:", error)
    return null
  }
}

async function getTenantID(email: string, _tenantID: string | null = null): Promise<string | MultiTenantResult | null> {
  const domain = email.substring(email.lastIndexOf("@") + 1)
  let tenantID = _tenantID

  const loginDataRef = collection(getFirestore(), "LoginData")

  let querySnapshot: QuerySnapshot | undefined

  if (!tenantID) {
    querySnapshot = await getDocs(
      query(
        loginDataRef,
        where("domain", "==", domain),
        where("customerType", "==", "healthcare")
      )
    )
  }

  if (querySnapshot?.docs.length && querySnapshot.docs.length > 1) {
    const results = (
      await Promise.all(
        querySnapshot.docs.map(async val => {
          const tenant = val.data().tenantID
          auth.tenantId = tenant

          try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, email)
            return signInMethods.length > 0 ? { tenantID: tenant, customerName: val.data().customerName } : null
          } catch (error) {
            console.error("Error fetching sign-in methods:", error)
            return null
          }
        })
      )
    ).filter(Boolean) as TenantResult[]

    if (results.length > 1) {
      return { multipleTenants: true, customers: results }
    }

    tenantID = results[0].tenantID
  }

  if (querySnapshot?.docs.length === 1) {
    tenantID = querySnapshot.docs[0].data().tenantID
  }

  return tenantID === "superAdmin" ? null : tenantID
}

type Vertical = "construction" | "healthcare" | "education"

const verticals: Vertical[] = ["construction", "healthcare", "education"]

// temporary solution. This should be fetched from the API
export function getCustomerVertical(): Vertical | null {
    // return null
    return verticals[2]
}
