import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Product } from "@prisma/client";

export async function DELETE(req: Request, { params }: {params:Product}) {

    const deletedProduct = await prisma.product.delete({
        where: {
            id: Number(params.id)
        }
    })
    if (!deletedProduct) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 })
    } else {
        return NextResponse.json(deletedProduct);
    }

}

export async function PUT(req: Request, { params }: {params:Product}) {

        const { name, photo, price,description } = await req.json();
        const updatedProduct = await prisma.product.update({
            where: {
                id: Number(params.id)
            },
            data: {
                name,
                photo,
                price,
                description
            }
        })
        return NextResponse.json(updatedProduct);
}
