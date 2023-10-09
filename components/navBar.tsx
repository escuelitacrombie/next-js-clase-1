import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
    <Link href="/dashboard/categories">dashboard</Link>
    <Link href="/products">products</Link>
    <Link href="/products/create">create</Link>
    </div>
  )
}

export default NavBar