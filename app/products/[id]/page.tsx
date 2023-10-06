"use client";

import EditForm from "@/components/EditForm";
import prisma from "@/lib/prisma";
import { useParams } from "next/navigation";
export default async function Page() {
  const productId = Number(useParams().id);

  let product = await fetch(`/api/products/${productId}`, {
    method: "GET",
  });
  product = await product.json();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      <h1> Products {productId} </h1>
      {product ? <EditForm product={product} productId={productId} /> : null}
    </main>
  );
}
