import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import ProductButtons from "@/components/product-components/ProductButtons";

export default async function Page() {
  const allProducts = await prisma.product.findMany();

  {
    allProducts.map((product) => {

    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Todos los productos </h1>

      {allProducts.map(async (product) => {
        const category = await prisma.category.findUnique({
          where: {
            id: product.CategoryId,
          },
        });

        return (
          <div key={product.id} className="flex gap-x-5 bg-slate-200 rounded shadow-xl p-2 min-w-[350px] justify-between my-5">
            <div className="flex-col">
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>Categoría: {category ? category.category : "Sin categoría"}</p>
            </div>
            <div className="w-[100px]">
              <ProductButtons productId={product.id} />
            </div>
          </div>
        );
      })}
      <div className="rounded-md bg-green-400 p-3 mt-4 font-semibold shadow-md">
        <Link href="/products/create">Crear producto</Link>
      </div>
    </main >
  );
}
