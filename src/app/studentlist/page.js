import Link from "next/link";

export default function studentlist() {
    const dynamicName = ["priyal", "ridhhi", "kavita", "bindu", "rubi"]
    return (
        <div className="text-center">
            <h1 className="font-bold text-[26px]">Student List</h1>
            <ul>
                {dynamicName.map((name) => (
                    <li>
                        <Link href={`/studentlist/${name}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}