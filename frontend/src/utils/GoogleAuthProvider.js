import firebase from "firebase"
import { auth, db } from "./Firebase"

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = ({register}) => {
    auth.signInWithRedirect(googleProvider)
}
