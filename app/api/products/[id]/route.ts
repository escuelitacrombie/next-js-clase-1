import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export const DELETE = async (req: NextRequest, {params} : any) => {
  try { 
 
    const idFromApi = Number(params.id)


    const result = await prisma.product.delete({
      where:{id: idFromApi}
    });
    return NextResponse.json(result, {
      status: 201,
    });
  } catch (err) {
    const error = err as { message: string };
    console.log(error);
    
    return NextResponse.json(
      {
        message: "algo no anduvo",
      },
      {
        status: 400,
      }
    );
  }
};

