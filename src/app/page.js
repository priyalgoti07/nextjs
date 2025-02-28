'use client'
import Link from 'next/link';
import './globals.css'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter()

  const navigation = (name) => {
    router.push(name)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)">
      <h1>Fetch Data With API in Clinet Components</h1>
      <Link href={'/productlist'}>Go to Product List</Link>
      {/* <button onClick={() => alert('i ma Home Button')}>Click me</button>
      <Link href='/login' >Go To Login Page</Link>
      <Link href='/about' >Go To About Page</Link>
      <button
        className="border-2 border-solid border-green-500 p-2"
        onClick={() => navigation('/login')}>
        Go Login Page through Button Tage
      </button>
      <button
        className="border-2 border-solid border-blue-500 p-2"
        onClick={() => navigation('/about')}>
        Go About Page through Button Tage
      </button> */}
    </div>
  );
}
