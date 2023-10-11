import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
    const result = await prisma.product.findMany()
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

export const DELETE = async (req: NextRequest) => {
    try {
    const id  = await req.json()

    const result = await prisma.product.delete({
        where: {
        id: id
        },
    })
    return NextResponse.json(result, { status: 200 })
    } catch (err) {
    const error = err as { message: string };
    return NextResponse.json(
        {
        message: error.message,
        },
        {
        status: 500,
        }
    );
    }
};
