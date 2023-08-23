import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email, password, username) {
    console.log(username)
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password, username);
        await updateProfile(auth.currentUser, {
            displayName: username
        })
        console.log(result)
        // await updateProfile(auth.currentUser, { displayName: username })
    } catch (e) {
        error = e;
    }

    return { result, error };
}
