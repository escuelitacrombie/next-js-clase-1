import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const result = await prisma.product.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(result, {
      status: 200,
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

/* export const PUT = async (req: NextRequest, { params }: any) => {
  try {
    const result 
  } catch (error) {
    
  }
} */
