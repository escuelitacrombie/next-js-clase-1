import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import ProductButtons from "@/components/ProductButtons";

export default async function Page() {
  const allProducts = await prisma.product.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Todos los productos </h1>

      {allProducts.map((product) => (
        <div key={product.id} className="flex gap-x-5 bg-slate-200 rounded shadow-xl p-2">
          <div className="flex-col">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {/* <Image src={`/${product.image}`} alt={product.name} width={10} height={10}/> */}
          </div>
          <div className="w-[100px]">
          <ProductButtons productId={product.id} />
          </div>
        </div>
      ))}

      <div className="rounded-md bg-green-400 p-3 mt-4 font-semibold shadow-md">
        <Link href="/products/create">Crear producto</Link>
      </div>
    </main>
  );
}
