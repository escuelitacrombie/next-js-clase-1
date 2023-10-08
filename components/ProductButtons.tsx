"use client"

import Link from "next/link"

const ProductButtons = (props: {
    productId: Number,
    data?: {}
}) => {

    const handleDelete = async () => {
        await fetch("/api/products", {
            method: "DELETE",
            body: JSON.stringify(props.productId)
        })
        window.location.reload()
    }

    return (
        <div>
            <button onClick={handleDelete}>Eliminar</button>
            <Link href={`/products/${props.productId}`}>Editar</Link>
        </div>
    )
}

export default ProductButtons