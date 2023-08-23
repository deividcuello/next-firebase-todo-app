'use client'
import addData from "@/firebase/firestore/addData";
import Data from "@/firebase/firestore/getData";
import { useAuthContext } from "@/context/AuthContext";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')
  const { user } = useAuthContext()

  const handleForm = async (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 100)
    let data = {}
    data[id] = [
      {
        title,
        task
      }
    ]
    const add = await addData('todo', `${user.email.split('@')[0]}`, data)
    Data()
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
        <input type="submit" value='Add' className="bg-yellow-400  w-full px-1 py-2 border border-black cursor-pointer" />
      </div>
    </form>
  )
}
