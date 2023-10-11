import Link from 'next/link';

export const NavBar = () => {
    return (
      <div>
        <nav className="bg-black pt-2 pb-2">
          <ul className="text-white flex items-center justify-center gap-5">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };