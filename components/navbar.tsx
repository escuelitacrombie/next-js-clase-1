import Link from 'next/link'
import React from 'react'

export default function Navbar () {
  return (
    <div className='flex justify-between w-[500px] m-auto'>
        
        <li> <Link href="http://localhost:3000/products">PRODUCTS</Link></li>
        <li> <Link href="http://localhost:3000/products/create">CREATE</Link></li>
    </div>
  )
}
