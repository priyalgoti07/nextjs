'use client'
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)">
      <h1>Event, Function and state</h1>
      <button onClick={() => alert('i ma Home Button')}>Click me</button>
    </div>
  );
}

import React from 'react'