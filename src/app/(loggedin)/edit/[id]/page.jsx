'use client'
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import getUser from "@/firebase/firestore/getUser";
import { useAuthContext } from "@/context/AuthContext";

export default function Home() {
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    const params = useParams()

    const { user } = useAuthContext()

    useEffect(() => {
        async function user() {
            const dataUser = await getUser(params.id)
        }
        user()
    }, [])

    const handleForm = async (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 100)
        e.preventDefault()
        let data = {}
        data[params.id] = [
            {
                title,
                task
            }
        ]

        const docRef = doc(db, "todo", `${user.email.split('@')[0]}`);

        updateDoc(docRef, data)
            .then(docRef => {
                console.log("Value of an Existing Document Field has been updated");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <form className="flex justify-center items-center flex-col gap-2 w-fit mx-auto p-2 border border-black mt-10" onSubmit={handleForm}>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Title</label>
                <input type="text" placeholder="Title" className="border border-gray-300 p-2" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="task" className="border border-gray-300 p-2" onChange={(e) => setTask(e.target.value)} />
            </div>
            <div className="w-full">
                <input type="submit" value='Edit' className="bg-yellow-400  w-full px-1 py-2 border border-black cursor-pointer" />
            </div>
        </form>
    )
}
