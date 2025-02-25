'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    return (
        <>
            <h1 className='heading'> About Page</h1>
            <button className="border-2 border-solid border-green-500 p-2"
                onClick={() => router.push('/')}>
                Go To HOme Page
            </button>
            <br />
            <br />
            <Link href='/about/aboutstudent' className='text-red-500'>Go To AboutStudent Page</Link>
            <br />
            <br />
            <Link href='/about/aboutcollege' className='text-blue-500'>Go To AboutCollege Page</Link>

        </>
    )
}

export default page