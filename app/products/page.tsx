/* eslint-disable @next/next/no-img-element */
import prisma from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";

export default async function Page() {
  const allProducts = await prisma.product.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Todos los productos </h1>

      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </main>
  );
}
