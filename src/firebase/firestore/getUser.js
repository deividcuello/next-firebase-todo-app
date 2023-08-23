import { doc, getDoc } from "firebase/firestore";
import { db } from '../config'
import { useAuthContext } from "@/context/AuthContext";

export default async function getUser(documentId) {
    console.log(documentId)
    const docRef = doc(db, 'todo', documentId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false
    }
}

