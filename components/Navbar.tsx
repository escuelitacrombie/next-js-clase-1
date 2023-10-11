import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='gap-3'>
        <Link className='pr-5' href="/dashboard">Dashboard</Link>
        <Link className='pr-5' href="/products">products</Link>
        <Link className='pr-5' href="/about">about</Link>
    </nav>
  )
}
