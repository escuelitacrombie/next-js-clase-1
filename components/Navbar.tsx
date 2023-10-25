import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-8 py-5 w-11/12 mx-auto">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/products/create">Create Product</Link>
    </nav>
  );
};

export default Navbar;
