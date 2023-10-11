import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json()
  try {
    await prisma.role.create({
      data: {
        roleName: body.roleName,
        userId: body.userId,
      },
    });

    return NextResponse.json(
      {
        message: "role create",
      },
      {
        status: 201,
      }
    );
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