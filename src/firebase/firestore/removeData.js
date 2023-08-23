import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from '../config'

export default async function removeData(documentId, index) {


    const docToDelete = doc(db, 'todo', documentId);
    let obj = {}
    obj[index] = deleteField() 

    await updateDoc(docToDelete, obj);



}