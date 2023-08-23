import { collection, query, getDocs, doc } from "firebase/firestore";
import { db } from '../config'


export default async function Data() {
    const data = []
    const q = query(collection(db, "todo"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const obj = {
            'id': doc.id,
            'title': doc.data().title, 
            'task' : doc.data().task
        }
        data.push(obj);
    });
    
    return data
}