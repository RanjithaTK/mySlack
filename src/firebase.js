// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCfPnNu3t17TWzCX3JExG7uuDtbGOd4UuU",
  authDomain: "slack-52c69.firebaseapp.com",
  projectId: "slack-52c69",
  storageBucket: "slack-52c69.appspot.com",
  messagingSenderId: "1013721323666",
  appId: "1:1013721323666:web:81f377af34834d75de6e4b",
  measurementId: "G-CKLVCEBJF4",
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
export const auth = firebase.auth()
//enabling googleauthentication
export const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
