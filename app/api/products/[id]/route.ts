import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params: { id } }) => {
    const productId = Number(id)
    try {
        const result = await prisma.product.findUnique({
            where: { id: productId }
        })
        return NextResponse.json(result)
    } catch (err) {
        const error = err as { message: string };
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 400,
            }
        );
    }
}

export const PUT = async (req: Request, {params: {id}}) => {
    try {
        const productId = Number(id)
        const body = await req.json()
        const result = await prisma.product.update({
            where: { id: productId },
            data: body
        })
        return NextResponse.json(result, {
            status: 200,
        })
    } catch (err) {
        const error = err as { message: string };
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 400,
            }
        );
    }
}