import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
// import ReactGa from "react-ga"

import { useAppContext } from "../context/AppContext"
import { getCustomerVertical } from "../services/auth/AuthService"

import { RootState } from "../store"
import { actions as appActions} from "../store/app/appSlice"

import { collection, doc, onSnapshot, getFirestore, Firestore, query, where } from "firebase/firestore"
// import { firebaseApp, initializeFirestore, firestore, getCustomersSnapshot, fetchCustomerDoc } from "../services/db/firebase"
import { firebaseApp } from "../services/db/firebase"

// import { enUS, enGB, pt, fr, de, Locale } from "date-fns/locale"
// import { setDefaultLocale } from "react-datepicker"

// import { updatePeopleAndAssetsWithImages, handleTopicSubscriptions } from "./helpers/basePageHelpers"

const db = getFirestore(firebaseApp)

export default function BasePage() {
	const dispatch = useDispatch()

	const {
		userClaims,
		// selectedCustomer,
		// selectedSite,
		user,
		// globalOptions,
		// messagingSwitch,
		// notificationSwitch,
		vertical,
	} = useSelector(
		(state: RootState) => ({
			vertical: state.app.vertical,
			userClaims: state.auth.claims,
			// selectedCustomer: state.profile?.currentCustomer,
			// selectedSite: state.profile?.currentSite,
			user: state.auth?.user,
			// globalOptions: state.basePage?.globalOptions,
			// messagingSwitch: state.notifications?.messagingSwitch,
			// notificationSwitch: state.notifications?.notificationSwitch
		}),
		shallowEqual
	)

	const { loadVertical, VerticalApp } = useAppContext()

	useEffect(() => {	
		if (vertical) return
		const assignedVertical = getCustomerVertical()

		// loads vertical and adds it to the app context
		loadVertical(assignedVertical)
		assignedVertical && dispatch(appActions.setVertical({ vertical: assignedVertical }))
	
	}, [vertical, loadVertical])

    const lastLoadedVertical = useRef<string | null>(null)

	// console.log("BasePage:::lastLoadedVertical:::", lastLoadedVertical)

    useEffect(() => {	
        if (lastLoadedVertical.current === vertical) return
    
        vertical && loadVertical(vertical)
        vertical && (lastLoadedVertical.current = vertical)
    
    }, [loadVertical, vertical])

	// const localeMap: Record<string, Locale> = {
	// 	'en-US': enUS,
	// 	'en-GB': enGB,
	// 	pt,
	// 	fr,
	// 	de
	// }
	  
	// useEffect(() => {
	// 	const browserLocale = navigator.language
	  
	// 	const matchedLocaleKey = Object.keys(localeMap).includes(browserLocale)
	// 	  ? browserLocale
	// 	  : 'en-US'
	  
	// 	setDefaultLocale(matchedLocaleKey)
	// }, [])

	// useEffect(() => {
	// 	if (globalOptions) return
	// 	dispatch({type: "FETCH_GLOBAL_OPTIONS"})
	// 	// dispatch(actions.fetchGlobalOptions())
	// }, [])

	// useEffect(() => {
	// 	dispatch({ type: "SET_ROLES_AND_ASSET_TYPES", payload: {
	// 		customer: selectedCustomer,
	// 		roles: [],
	// 		types: globalOptions?.defaultAssetTypes
	// 	}})
	// }, [selectedCustomer, globalOptions])

	// useEffect(() => {
	// 	dispatch({ type: "SET_TAG_SEEN_TIMEOUT", payload: {
	// 		selectedSite,
	// 		globalOptions
	// 	}})
	// }, [selectedSite, globalOptions])

	// useEffect(() => {
	// 	if (!selectedCustomer || !selectedSite) return

	// 	const peopleRef = collection(firestore, `Customers/${selectedCustomer.id}/People`)

	// 	// Using the `or` operator with Firestore queries isn't directly supported; however, we can perform the equivalent
	// 	// by using a `where` clause to check for both `siteId` values. This method assumes that documents should match
	// 	// either of the `siteId` values.
	// 	const q = query(peopleRef, where("siteId", "in", [selectedSite.id, false]))

	// 	const unsubscribe = onSnapshot(q, snapshot => {
	// 		const data = snapshot.docs.map(doc => ({
	// 			id: doc.id,
	// 			...doc.data()
	// 		}))

	// 		updatePeopleAndAssetsWithImages(data)
	// 			.then(response => {
	// 				// dispatch(basePageSlice.actions.peopleFetched(response || []))
	// 				dispatch({ type: "PEOPLE_FETCHED", payload: response || [] })
	// 			})
	// 			.catch(error => {
	// 				console.error("Error updating people and assets with images:", error)
	// 			})
	// 	})

	// 	return () => {
	// 		unsubscribe()
	// 	}
	// }, [selectedCustomer, selectedSite, firestore])

	// useEffect(() => {
	// 	if (!selectedSite?.id) return
	  
	// 	dispatch({
	// 		type: "FETCH_SITE_DATA",
	// 		payload: { siteId: selectedSite.id }
	// 	})
	// }, [selectedCustomer, selectedSite])

	// useEffect(() => {
	// 	ReactGa.initialize("UA-163381689-7")
	// 	ReactGa.pageview(window.location.pathname + window.location.search)
	// }, [])

	// const [notificationModal, setNotificationModal] = useState()

	// function onHide() {
	// 	setNotificationModal()
	// }

	// TODO: fix this, there are FirebaseErrors being thrown
	// useEffect(() => {
	// 	if (!selectedCustomer) return

	// 	handleTopicSubscriptions({
	// 		notificationsEnabled: notificationSwitch,
	// 		messagesEnabled: messagingSwitch,
	// 		sites: selectedCustomer?.sites || [],
	// 		userId: user?.id
	// 	})
	// }, [selectedCustomer, notificationSwitch, messagingSwitch])

    if (!VerticalApp) return <h3>No VerticalApp...</h3>

    return (
        <VerticalApp />
    )
}
