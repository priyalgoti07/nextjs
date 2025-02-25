'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const AboutStudent = () => {
    const route = useRouter()
    return (
        <>
            <h1 className='heading'>About page for Student</h1>
            <button onClick={() => route.push('/about')} className='border-2 border-amber-800 p-2'>About Page</button>
        </>
    )
}

export default AboutStudent;