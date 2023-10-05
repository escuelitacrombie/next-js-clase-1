"use client"
import { DELETE } from '@/app/api/products/route'
import React from 'react'

const ProductButtons = (id: any) => {
    const productId = id
    const handleDelete = async(productId) => {
        try {
            const res = await DELETE(productId)
            return res
        } catch (error) {
            
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Eliminar</button>
            <button>Editar</button>
        </div>
    )
}

export default ProductButtons