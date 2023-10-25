import prisma from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const productId = parseInt(params.id);
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    return NextResponse.json(product, {
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

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const data = await req.json();
    const productId = params.id;
    const updatedProduct = await prisma.product.update({
      where: {
        id: Number(productId),
      },
      data: {
        ...data,
      },
    });
    return NextResponse.json(updatedProduct, {
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
