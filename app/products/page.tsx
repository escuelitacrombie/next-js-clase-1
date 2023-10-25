import Button from "@/components/Button";
import prisma from "@/lib/prisma";
import Link from "next/link";
export default async function Page() {
  const allProducts = await prisma.product.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1> Todos los productos </h1>

      {allProducts.map((product) => (
        <div key={product.id} className="flex p-4 gap-6 items-center">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {product.img && <img src={product.img} alt="" className="h-14" />}
          <Link href={`/products/${product.id}`}>Edit</Link>
          <Button function="Delete" productId={product.id} />
        </div>
      ))}
    </main>
  );
}
