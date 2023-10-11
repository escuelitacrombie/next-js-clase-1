import prisma from "@/lib/prisma";
import Link from 'next/link';

export default async function Page() {
  const allProducts = await prisma.product.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1> Todos los productos </h1>

      <div className="flex items-center justify-center gap-5">
        <a className="bg-orange-200 border rounded-full p-2" href="/products/create">Create</a>

      </div>

      {allProducts.map((product) => (
        <div className="pt-10 flex flex-col items-center" key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.img}</p>
          <div className="ml-5 mt-2">
            <Link href={`/products/edit/${product.id}`}>
              <button className="p-2 border rounded-xl">Editar</button>
            </Link>
            <Link href={`/products/delete/${product.id}`}>
              <button className="p-2 border rounded-xl text-red-600">Eliminar</button>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
