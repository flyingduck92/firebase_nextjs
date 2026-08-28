import { initializeApp, getApps } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { FirebaseStorage, getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB7IDOW5Uw5eHMokhwQPNxFLoK54hVqz7Q",
  authDomain: "fire-home-fb329.firebaseapp.com",
  projectId: "fire-home-fb329",
  storageBucket: "fire-home-fb329.firebasestorage.app",
  messagingSenderId: "869329740824",
  appId: "1:869329740824:web:424ff424a8b6534f3fcf6d"
}

const currentApp = getApps()
let auth: Auth
let storage: FirebaseStorage

if (!currentApp.length) {
  const app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  storage = getStorage(app)
} else {
  const app = currentApp[0]
  auth = getAuth(app)
  storage = getStorage(app)
}

export { auth, storage }