import Link from "next/link";

export default function NotFound() {
    return (
        <div className="font-bold text-center text-[20px] text-red-600">
            <h1>This Page is not Availabel</h1>
            <Link href={'/'} className="font-bold text-[15px] text-blue-800 underline underline-offset-1">Click Here go to The Home Page </Link>
        </div>
    )
}