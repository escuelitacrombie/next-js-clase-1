"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const CardsButton = (props: {
    productId: Number,
    data?: {}
}) => {

    const router = useRouter()

    const handleDelete = async () => {
        await fetch("/api/products", {
            method: "DELETE",
            body: JSON.stringify(props.productId)
        })
        router.refresh()
    }

    return (
        <div className="gap-y-2">
            <button className="rounded p-2 bg-blue-500 text-white font-semibold hover:bg-blue-600" onClick={handleDelete}>Delete</button>
            <div className=" rounded p-2 bg-green-500  text-white font-semibold w-[78px] text-center mt-2 hover:bg-green-600">
                <Link href={`/products/${props.productId}`}>Edit</Link>
            </div>
        </div>
    )
};

export default CardsButton