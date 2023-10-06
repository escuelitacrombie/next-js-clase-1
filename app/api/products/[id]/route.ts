import prisma from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest,{ params}:{params:{id:string}}) => {
try{
const productId = parseInt(params.id)
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  })

  return NextResponse.json(product, {
    status: 201,
  });
} catch(err) {
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


export const PUT = async (req: NextRequest) => {
    try {
      const data = await req.json();


     const updateProduct = await prisma.product.update({
    where: {
      id: data.id,
    },
    data: {
        ...data
    },
  })
      return NextResponse.json(updateProduct, {
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
  