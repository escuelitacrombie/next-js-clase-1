"use client"

import UpdateProduct from "@/components/UpdateProduct"
import prisma from "@/lib/prisma"
import { useParams } from "next/navigation"


export default async function Page() {
    const productId = Number(useParams().id)

    const result = await fetch(`/api/products/${productId}`, {
        method: "GET",
    })

    const product = await result.json()

    return (
        <main className="flex flex-col items-center">
            <h1>Product {productId}</h1>
            {product && <UpdateProduct product={product} productId={productId} />}
        </main>
    )
}
