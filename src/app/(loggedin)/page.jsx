'use client'
import Data from "@/firebase/firestore/getData"
import Link from "next/link"
import { useState, useEffect } from "react"
import getUser from "@/firebase/firestore/getUser";
import { useAuthContext } from "@/context/AuthContext";
import removeData from "@/firebase/firestore/removeData";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [taskKeys, setTaskKeys] = useState([])

  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    const userExist = getUser(user.email.split('@')[0]).then(res => setTasks([...tasks, res]))

  }, [])
  useEffect(() => {
    let keys = []
    for (var key in tasks[0]) {
      if (tasks[0].hasOwnProperty(key)) {
        keys.push(key)
      }
      setTaskKeys(keys)
    }

  }, [tasks])

  function handleDelete(index){
    const tempTasks = tasks
    const userDelete = removeData(user.email.split('@')[0], index).then(
      getUser(user.email.split('@')[0]).then(res => setTasks([...tasks, res]))
    )
    
    
}

  return (
    <div className="mt-10 flex items-start justify-start flex-wrap gap-5">
      {taskKeys.map((_, index) =>
        <div key={index} className="max-w-[15rem] flex flex-col gap-2 border-2 border-black p-2 w-60 h-56">
          <div>
            <h2 className="text-xl font-semibold overflow-x-auto">
              {tasks[0][taskKeys[index]][0].title}
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <p>{tasks[0][taskKeys[index]][0].task}</p>
          </div>
          <div className="bg-yellow-200 flex gap-2">
            <Link href={`edit/${taskKeys[index]}`} className="bg-green-400 font-semibold border-2 border-black w-full text-center">Edit</Link>
            <button className="bg-red-400 font-semibold border-2 border-black w-full text-center" onClick={() => handleDelete(taskKeys[index])}>Delete</button>
          </div>
        </div>
      )}
    </div>
  )
}
