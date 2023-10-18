"use client"

import UpdateProduct from "@/components/product-components/UpdateProduct"
import { useParams } from "next/navigation"
import getProduct from "./getProduct"

export default function Page() {
    const productId = Number(useParams().id)

    const product = getProduct(productId)
    
    return (
        <main className="flex flex-col items-center">
            <h1>Product {productId}</h1>
            {product && <UpdateProduct product={product} productId={productId} />}
        </main>
    )
}
