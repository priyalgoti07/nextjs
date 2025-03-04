'use client'
import React from 'react'

const Button = (user) => {
    return (
        <div>
            <button onClick={() => alert(`User Name ${user.user.lastName}`)} className='border border-spacing-2'>Click me</button>
        </div>
    )
}

export default Button