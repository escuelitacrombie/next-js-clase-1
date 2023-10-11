import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <div className='flex w-full h-[100px] bg-blue-500 justify-evenly items-center'>
        <Link href={"/products"}>Products</Link>
        <Link href={"/home"}>Home</Link>
        <Link href={"/about"}>About</Link>
    </div>
  )
}

export default Navbar