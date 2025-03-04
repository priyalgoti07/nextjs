'use client'
import React, { useState } from 'react'

const page = () => {
    const [h3style, setH3style] = useState({ backgroundColor: 'green' })
    return (
        <div>USER
            <h1 style={{ backgroundColor: 'black' }}>I am 3 heading</h1>
            <h2>I am 2 heading</h2>
            <h3 style={h3style}>I am 3 heading</h3>
            <button onClick={()=> setH3style({backgroundColor:'blue',color:'#ffff'})} style={{border:'2px solid red'}}>Update Style</button>
        </div>
    )
}

export default page