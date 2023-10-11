"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const ProductButtons = (props: {
    productId: Number,
    data?: {}
}) => {

    const router = useRouter()

    const handleDelete = async () => {
        await fetch(`/api/products/${props.productId}`, {
            method: "DELETE",
        })
        router.refresh()
    }

    return (
        <div>
            <button onClick={handleDelete}>Eliminar</button>
            <Link href={`/products/${props.productId}`}>Editar</Link>
        </div>
    )
}

export default ProductButtons