"use client";
import prisma from "@/lib/prisma";

export default async function allProducts() {
  const allProducts = await prisma.product.findMany();

  const handleBorrar = (id: Number) => {
    fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      {allProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => handleBorrar(product.id)}>Borrar</button>
        </div>
      ))}
    </div>
  );
}
