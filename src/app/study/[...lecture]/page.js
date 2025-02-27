'use client'
import { useParams } from "next/navigation"

export default function Lecture() {
    const params = useParams()
    console.log("params", params.lecture)
    return (
        <>
            <h1 className="font-bold text-center text-[28px] text-blue-700">Lecture Day of college :{params.lecture[0]}</h1>
            <h1 className="font-bold text-center text-[14px] text-blue-700">Lecture No :{params.lecture[1]}</h1>
        </>
    )
}