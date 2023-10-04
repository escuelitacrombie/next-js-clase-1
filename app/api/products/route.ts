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

export const DELETE = async (req: NextRequest) => {
  try {

    const body = await req.json();    

    console.log("adsad");

    const idFromApi = parseInt(body.id)

    const result = await prisma.product.delete({
      where:{id: idFromApi}
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

