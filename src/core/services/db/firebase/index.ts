import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {
  doc,
  getDoc,
  getFirestore,
  Firestore,
  collection,
  getDocs,
  setDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  endBefore,
  limitToLast,
  QuerySnapshot,
  DocumentSnapshot,
  QueryDocumentSnapshot
} from "firebase/firestore"

import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// import { getDatabase } from "firebase/database"
import loadFirebaseConfig from "./config"
import { FirebaseApp } from "firebase/app"
import { DocumentData } from "firebase/firestore"

const config = await loadFirebaseConfig()

// console.log("Firebase config:::", config)

export const firebaseApp: FirebaseApp = initializeApp(config.firebaseConfig)

export const analytics = getAnalytics(firebaseApp)

export const auth = getAuth(firebaseApp)

export let firestore: Firestore = getFirestore(firebaseApp)

export const storage = getStorage(firebaseApp)

// console.log("Firebase storage:::", storage)

export async function initializeFirestore(tenantId?: string): Promise<boolean> {
  const id = tenantId?.toLowerCase() || null

  let auxFirestore: Firestore

  try {
    auxFirestore = id ? getFirestore(firebaseApp, id) : getFirestore(firebaseApp)

    const isValid = await isBDValid(auxFirestore)

    if (isValid) {
      firestore = auxFirestore
      return true
    } else {
      console.error("Invalid Firestore instance.")
      firestore = getFirestore(firebaseApp)
      return false
    }
  } catch (error) {
    console.error("Error initializing Firestore:", error)
    return false
  }
}

async function isBDValid(firestoreInstance: Firestore): Promise<boolean> {
  try {
    const customersCollection = collection(firestoreInstance, "Customers")
    const snapshot = await getDocs(customersCollection)

    return snapshot.docs.length > 0
  } catch (error) {
    console.error("Error validating Firestore database:", error)
    return false
  }
}

export const createUserProfileDocument = async (
  userAuth: { uid: string; displayName?: string; email?: string } | null,
  additionalData?: Record<string, unknown>
): Promise<DocumentSnapshot<DocumentData> | void> => {
  if (!userAuth) return

  const userRef = doc(firestore, `Login/${userAuth.uid}`)
  const snapShot = await getDoc(userRef)

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error("Error creating user", error)
    }
  }

  return snapShot
}

export const addDocToCollection = async (
  collectionKey: string,
  data: Record<string, unknown>
): Promise<void> => {
  const collectionRef = collection(firestore, collectionKey)
  const newDocRef = doc(collectionRef)

  await setDoc(newDocRef, data)
}

export async function listEmployees(
  limitCount: number,
  search: string,
  searchField: string,
  customerId: string
): Promise<QuerySnapshot<DocumentData>> {
  const employeesCollection = collection(firestore, `Customers/${customerId}/DevicesWiFi_v3`)
  const employeesQuery = query(
    employeesCollection,
    where(searchField, ">=", search),
    where(searchField, "<=", `${search}\uf8ff`),
    orderBy(searchField),
    limit(limitCount)
  )

  return await getDocs(employeesQuery)
}

export async function listNextEmployees(
  lastDoc: QueryDocumentSnapshot<DocumentData>,
  limitCount: number,
  search: string,
  searchField: string,
  customerId: string
): Promise<QuerySnapshot<DocumentData>> {
  const employeesCollection = collection(firestore, `Customers/${customerId}/DevicesWiFi_v3`)
  const employeesQuery = query(
    employeesCollection,
    where(searchField, ">=", search),
    where(searchField, "<=", `${search}\uf8ff`),
    orderBy(searchField),
    startAfter(lastDoc),
    limit(limitCount)
  )

  return await getDocs(employeesQuery)
}

export async function listPreviousEmployees(
  firstDoc: QueryDocumentSnapshot<DocumentData>,
  limitCount: number,
  search: string,
  searchField: string,
  customerId: string
): Promise<QuerySnapshot<DocumentData>> {
  const employeesCollection = collection(firestore, `Customers/${customerId}/DevicesWiFi_v3`)
  const employeesQuery = query(
    employeesCollection,
    where(searchField, ">=", search),
    where(searchField, "<=", `${search}\uf8ff`),
    orderBy(searchField),
    endBefore(firstDoc),
    limitToLast(limitCount)
  )

  return await getDocs(employeesQuery)
}

export async function listLastEmployees(
  limitCount: number,
  search: string,
  searchField: string,
  customerId: string
): Promise<QuerySnapshot<DocumentData>> {
  const employeesCollection = collection(firestore, `Customers/${customerId}/DevicesWiFi_v3`)
  const employeesQuery = query(
    employeesCollection,
    where(searchField, ">=", search),
    where(searchField, "<=", `${search}\uf8ff`),
    orderBy(searchField),
    limitToLast(limitCount)
  )

  return await getDocs(employeesQuery)
}

export async function changeEmployeesData(data: {
  clientMac: string
  optIn?: boolean
  trackDevice?: boolean
  realName?: string
  emailAddress?: string
  username?: string
  deviceName?: string
  deviceModel?: string
}): Promise<void> {
  const deviceRef = doc(firestore, `Customers/C000100/DevicesWiFi_v3/${data.clientMac}`)

  await setDoc(
    deviceRef,
    {
      optIn: data.optIn ?? false,
      trackDevice: data.trackDevice ?? false,
      user: {
        realName: data.realName ?? "",
        emailAddress: data.emailAddress ?? "",
        username: data.username ?? "",
        deviceName: data.deviceName ?? "",
        deviceModel: data.deviceModel ?? ""
      }
    },
    { merge: true }
  )

  if (data.trackDevice === false) {
    await setDoc(
      deviceRef,
      {
        loc: { currLocation: "" }
      },
      { merge: true }
    )
  }
}
