const loadFirebaseConfig = async () => {
	let localConfig: any = {}
  
	try {
	  const module = await import("./local-config")
	  localConfig = module.default || module
	} catch {
	  localConfig = {} // Fallback if local-config does not exist
	}
  
	const { env } = import.meta

	// console.log("loadFirebaseConfig:::env:::", env)
  
	return {
	  production: env?.VITE_PRODUCTION || localConfig?.production || "$PRODUCTION",
  
	  firebaseConfig: {
		apiKey: env?.VITE_FIREBASE_API_KEY || localConfig?.apiKey || "$FIREBASE_API_KEY",
		authDomain: env?.VITE_FIREBASE_AUTH_DOMAIN || localConfig?.authDomain || "$FIREBASE_AUTH_DOMAIN",
		projectId: env?.VITE_FIREBASE_PROJECT_ID || localConfig?.projectId || "$FIREBASE_PROJECT_ID",
		storageBucket: env?.VITE_FIREBASE_STORAGE_BUCKET || localConfig?.storageBucket || "$FIREBASE_STORAGE_BUCKET",
		messagingSenderId: env?.VITE_FIREBASE_MESSAGING_SENDER_ID || localConfig?.messagingSenderId || "$FIREBASE_MESSAGING_SENDER_ID",
		appId: env?.VITE_FIREBASE_APP_ID || localConfig?.appId || "$FIREBASE_APP_ID",
		measurementId: env?.VITE_FIREBASE_MEASUREMENT_ID || localConfig?.measurementId || "$FIREBASE_MEASUREMENT_ID",
	  }
	}
  }
  
  export default loadFirebaseConfig
  