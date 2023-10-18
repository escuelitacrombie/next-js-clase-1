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
        <div className="gap-y-2">
            <button className="rounded p-2 bg-red-500 font-semibold" onClick={handleDelete}>Eliminar</button>
            <div className="
            rounded p-2 
            bg-amber-500 
            font-semibold 
            w-[78px] 
            text-center
            mt-2
            ">
                <Link href={`/products/${props.productId}`}>Editar</Link>
            </div>
        </div>
    )
}

export default ProductButtons