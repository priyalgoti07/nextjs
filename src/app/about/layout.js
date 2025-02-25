'use client'
import Link from 'next/link'
import React from 'react'
import './about.css'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
    const parthName = usePathname()
    console.log(parthName);

    return (
        <div>
            <ul className='login-bar'>
                <li>
                    <Link href='/login' className='font-bold text-[]'>Login Navbra</Link>
                </li>
                <li>
                    <Link href='/login'>Login Mian</Link>
                </li>
                <li>
                    <Link href='/login/loginstudent'>Student Login</Link>
                </li>
                <li>
                    <Link href='/login/logincollege'>College Login</Link>
                </li>
            </ul>
            <h1 className='font-bold text-[2rem]'>Comman Layout For About Page</h1>
            {children}
        </div>
    )
}

export default layout