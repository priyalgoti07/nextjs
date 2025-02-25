'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const AboutCollege = () => {
    const route = useRouter()
    return (
        <>
            <h1 className='heading'>About Page for College</h1>
            <button onClick={() => route.push('/about')} className='border-2 border-green-400 p-2'>About Page</button>
        </>
    )
}

export default AboutCollege;