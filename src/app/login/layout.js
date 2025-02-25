'use client'
import Link from 'next/link'
import React from 'react'
// import './about.css'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
    const parthName = usePathname()
    return (
        <div>
            {parthName !== '/login/logincollege' ? <ul className='login-bar' style={{ display: 'flex', gap: '20px' }}>
                <li>
                    <Link href='/login' className='font-bold text-[14px]'>Login Navbra</Link>
                </li>
                <li>
                    <Link href='/login'>Login Mian</Link>
                </li>
                <li>
                    <Link href='/login/loginstudent'>Student Login</Link>
                </li>
                <li>
                    <Link href='/login/logincollege'>Teacher Login</Link>
                </li>
            </ul> : <li>
                <Link href='/login'>Go to Login Page</Link>
            </li>}
            <h1 className='font-bold text-[2rem] text-center bg-orange-400'>Comman Layout For About Page</h1>
            {children}
        </div>
    )
}

export default layout