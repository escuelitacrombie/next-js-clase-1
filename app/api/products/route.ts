import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const result = await prisma.product.create({
      data: body,
    });
    return NextResponse.json(result, {
      status: 201,
    });
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
};

export const DELETE = async (id: string) => {
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(id)
      }
    });
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