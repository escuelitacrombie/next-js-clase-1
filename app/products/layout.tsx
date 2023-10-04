import type { Metadata} from "next";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Products",
  description: "Pagina de products",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-400">
     <nav className='gap-3'>
        <Link className='pr-5' href="products/create">create product</Link>
        <Link className='pr-5' href="products/delete">delete product</Link>
    </nav>
    {children}
    </div>;
}
