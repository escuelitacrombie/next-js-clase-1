import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <nav className="bg-teal-600 p-5">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex gap-x-5 text-white">
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/products">PRODUCTS</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/categories">CATEGORIES</Link>
                    </li>
                    <li>
                        <Link href="/products/create">CREATE PRODUCT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar

