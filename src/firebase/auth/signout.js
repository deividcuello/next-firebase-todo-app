import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";
import { redirect } from 'next/navigation';

const auth = getAuth(firebase_app);

export default async function signOutFunc() {
    let result = null,
        error = null,
        success = false;
    try {
        result = await signOut(auth);
        success = true;
    } catch (e) {
        error = e;
        console.log(error)
    }
   
if(success) redirect('/signin')

    return { result, error };
}