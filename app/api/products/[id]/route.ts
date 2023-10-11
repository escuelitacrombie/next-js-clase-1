import prisma from "@/lib/prisma";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
interface Params { params: {id: string}}

export const DELETE = async (request: Request, {params}: Params) => {
    try {
        const deletedProduct = await prisma.product.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(deletedProduct)
    } catch (error) {
      if (error instanceof Error){
        return NextResponse.json({
            message: error.message,
        },{
            status: 500,
        })
    }
    }
}

export const PUT = async (request: Request, {params}: Params) => {
    const {name, description, price, img, categoria} = await request.json();
    const updatedProduct = await prisma.product.update({
        where: {
            id: Number(params.id)
        },
        data: {
            name,
            description,
            price,
            img,
            categoria
        }
    })
    return NextResponse.json(updatedProduct, { status: 200 })
}