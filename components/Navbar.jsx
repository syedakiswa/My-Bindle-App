"use client"

import Image from "next/image";


export default function Navbar() {
  return (
    <nav className="w-full px-10 py-6  bg-[#ff5a4f]  text-white sticky">
      <div className="flex items-center justify-between">
        {/* Logo centered */}
        <div className="flex-1 flex justify-center items-center gap-2">
          <Image width={22} height={22} src="/logo.png" className="h-8" alt="Logo"/>
          <span className="font-bold text-2xl">Mybindle</span>
        </div>

 
      </div>
    </nav>
  )
}
