import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: Params) {

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

export async function PUT(req: Request, { params }: Params) {

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
