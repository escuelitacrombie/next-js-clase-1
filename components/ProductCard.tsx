"use client";

import { useRouter } from "next/navigation";

export default function ProductCard({ product }: any) {
  const router = useRouter();

  const handleBorrar = (id: Number) => {
    fetch(`/api/products/${id}`, {
      method: "DELETE",
    }).then(() => router.refresh());
  };

  const handleEditar = (id: Number) => {
    fetch(`/api/products/${id}`, {
      method: "PUT",
    }).then(() => router.refresh());
  };

  return (
    <div key={product.id}>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => handleBorrar(product.id)}>Borrar</button>
      <button onClick={() => handleEditar(product.id)}>Editar</button>
    </div>
  );
}
