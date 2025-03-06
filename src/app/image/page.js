import Image from 'next/image'
import React from 'react'
import Profile from "../../../public/next.svg"

const page = () => {
    console.log("profile", Profile)
    return (
        <>
            <div>Image otimization in Next</div>
            {/* <Image 
            src={Profile} 
            alt='profile'
            width={270}
            height={200}
            /> */}
            <Image
                // src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYASDoTWmvfjsqqQ7r5KegWXOu39eoK9_vdKQamwZSXvLg2SHz" 
                // src="https://images.pexels.com/photos/29714362/pexels-photo-29714362/free-photo-of-autumn-walkway-with-vibrant-red-foliage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src="https://picsum.photos/500"
                alt='image'
                width={800}
                height={800} />
            <img src="https://images.pexels.com/photos/29714362/pexels-photo-29714362/free-photo-of-autumn-walkway-with-vibrant-red-foliage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </>
    )
}

export default page