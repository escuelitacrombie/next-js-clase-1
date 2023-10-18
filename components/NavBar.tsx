import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-center h-10 items-center'>
            <ul className='flex gap-x-4'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/dashboard/categories">Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar