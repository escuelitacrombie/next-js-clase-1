"use client"

import { FormValue } from "@/app/products/create/page"
import React, { useState, ChangeEvent, FormEvent, useCallback } from "react"

const UpdateProduct = (props: { product: any, productId: number }) => {
    const [values, setValues] = useState<FormValue>()

    const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const parsedFormValues = { ...values, price: Number(values?.price) };
        await fetch(`/api/products/${props.productId.toString()}`, {
            method: "PUT",
            body: JSON.stringify(parsedFormValues)
        })
    }

    return (
        <div>
            {" "}
            <form
                action="submit"
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
            >
                <input
                    onChange={handleChangeInput}
                    type="text"
                    value={props.product?.name}
                    name="name"
                    id="name"
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
                    value={props.product?.img}
                    name="img"
                    id="img"
                />
                <button>Save Changes</button>
            </form>
        </div>
    )
}

export default UpdateProduct