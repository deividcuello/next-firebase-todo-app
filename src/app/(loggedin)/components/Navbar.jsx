'use client'
import React from 'react'
import Link from 'next/link'
import signOutFunc from "@/firebase/auth/signout";


function Navbar() {
  return (
    <header className='bg-yellow-400 p-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link href='/'
          >
          <h1 className='text-xl font-bold'>Todo-List</h1>
          </Link>
        </div>
        <div className='flex gap-2'>
          <button className='font-bold text-xl bg-green-500 px-3 rounded-xl border-2 border-black' onClick={() => signOutFunc()}>Logout</button>
          <Link href='/todoform'>
            <button className='font-bold text-xl bg-green-500 px-3 rounded-xl border-2 border-black'>+</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar