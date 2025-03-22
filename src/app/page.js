'use client'
import Link from 'next/link';
import './globals.css'
import { useRouter } from 'next/navigation';
import customes from "./custom.module.css";
import other from './other.module.css';
// import outside from '@/app/style/outside.module.css'
import outside from '../app/style/outside.module.css'
import {Roboto} from "next/font/google";
import { inter, roboto_mono } from './font';
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap'
})
export default function Home() {
  const router = useRouter()

  const navigation = (name) => {
    router.push(name)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)">
      <h1>Fetch Data With API in Client Components</h1>
      <Link href={'/productlist'}>Go to Product List</Link>
      <br />
      <h1>Fetch Data With API in Server Components</h1>
      <Link href={'/userlist'}>Go to Car List</Link>
      {/* <button onClick={() => alert('i ma Home Button')}>Click me</button>
      <Link href='/login' >Go To Login Page</Link>import { Inter, Roboto_Mono } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
      <button
        className="border-2 border-solid border-blue-500 p-2"
        onClick={() => navigation('/about')}>
        Go About Page through Button Tage
      </button> */}
      <img src="/images.jpeg"/>
      <h1 className={customes.main}>Custome Module CSS</h1>
      <h1 className={other.main}>other Module CSS</h1>
      <h3 className={outside.main}>OutSide CSS</h3>
      <h1>Font Optimization in Next</h1>
      {/* <h1 style={{ fontFamily: 'Roboto', fontWeight: 100 }}>Font with Link Tag in Next</h1> */}
      <h1 className={roboto.className}>Font with Next js font feature</h1>
      <h1 className={roboto_mono.className}>Font with roboto_mono</h1>
      <h1 className={inter.className}>Font with inter</h1>
    </div>
  );
}
