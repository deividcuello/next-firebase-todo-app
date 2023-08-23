'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter, redirect } from "next/navigation";


function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
    console.log(`USER --> ${JSON.stringify(user)}`)

    React.useEffect(() => {
        if (user !== null) router.push("/")
        else redirect('/signin') 
    }, [user])

    return (<h1>Only logged in users can view this page</h1>);
}

export default Page;