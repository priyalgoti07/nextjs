"use client"
import Script from "next/script";

export default function userDetails() {
    return (
        <div>
            <h1 className="font-bold text-[14px]">Get User GetLocation</h1>
            <Script
            src="/location.js"
            onLoad={()=>console.log("file loaded")}
            ></Script>
        </div>
    )
}