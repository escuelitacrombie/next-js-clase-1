"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import EditProduct from './EditProduct' 

function ProductCard({ product }: any) {
    const id = product.id;
    const router = useRouter()
    const [selectedProduct, setSelectedProduct] = useState(false); 

    const handleDelete = () => {
        fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
    }

    return (
        <div>
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>Categoria: {product.categoria}</p>
                <img src={product.img} alt="" className="w-[100px] h-[100px]" />
                <br />
                <button className="bg-red-500" onClick={handleDelete}>DELETE</button>
                <button
                    className="bg-[#FF9B50] hover:bg-[#A53021] text-white py-2 px-4 rounded-lg w-full"
                    onClick={() => {
                        setSelectedProduct(!selectedProduct);
                    }}
                >
                    {selectedProduct ? "CANCELAR" : "EDITAR"}
                </button>
                {selectedProduct ? <EditProduct product={product}/> : null} 
            </div>
        </div>
    )
}

export default ProductCard
