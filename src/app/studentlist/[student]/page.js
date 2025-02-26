'use client'
import { useParams } from "next/navigation"

export default function Student() {
    const params = useParams()
    console.log("params", params)
    return (
        <div>
            <h1 className="font-bold text-center text-[28px]">Student Detalis: {params.student}</h1>
        </div>
    )
}