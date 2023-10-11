'use client'
import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageLoaderProps } from 'next/image';

export default async function Page() {
  
const [allProducts, setallProducts] = useState<Product[]>([])


useEffect(() => {
  fetch("/api/products")
    .then((response) => response.json())
    .then((p) => setallProducts(p));
}, []);



  const imageLoader =  ({ src, width }: ImageLoaderProps): string => {
    return `${src}?w=${width}}`
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> Todos los productos </h1>

      {allProducts ? allProducts.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <Image
            loader={imageLoader}
            src={product.img}
            alt="Picture of the author"
            width={500}
            height={500}
          /> 
        </div>
      )): <div>loading</div>}
    </main>
  );
}
