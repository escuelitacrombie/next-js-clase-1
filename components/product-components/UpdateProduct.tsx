"use client"

import { FormValue } from "@/interfaces/formValue"
import Link from "next/link"
import React, { useState, ChangeEvent, FormEvent, useCallback } from "react"


const UpdateProduct = (props:{ product: any, productId: number }) => {
    
    const [values, setValues] = useState<FormValue>()

    const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const parsedFormValues = { ...values, price: Number(values?.price) };
        await fetch(`/api/products/${props.productId}`, {
            method: "PUT",
            body: JSON.stringify(parsedFormValues)
        })
    }
    console.log(props.product);
    
    return (
        
        <div>
            <form
                action="submit"
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
            >
                <input
                    onChange={handleChangeInput}
                    type="text"
                    value={props.product.name}
                    name="name"
                    id="name"
                    placeholder=""
                />
                <input
                    onChange={handleChangeInput}
                    type="text"
                    value={props.product?.description}
                    name="description"
                    id="description"
                />
                <input
                    onChange={handleChangeInput}
                    type="text"
                    value={props.product?.price?.toString()}
                    name="price"
                    id="price"
                />
                <input
                    onChange={handleChangeInput}
                    type="text"
                    value={props.product?.image}
                    name="image"
                    id="image"
                />
                <button>Guardar</button>
                <Link href="/products">Volver</Link>
            </form>
        </div>
    )
}

export default UpdateProduct