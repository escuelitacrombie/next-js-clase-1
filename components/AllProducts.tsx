import prisma from "@/lib/prisma";
import ProductCard from "./ProductCard";

export default async function allProducts() {
  const allProducts = await prisma.product.findMany();

  return (
    <div>
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}
