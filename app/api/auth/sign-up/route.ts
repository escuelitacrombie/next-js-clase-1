import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const hash = await bcrypt.hash(body.password, 10);
    console.log(body.email, body.password, body.role, hash);

    await prisma.user.create({
      data: {
        email: body.email,
        hashPassword: hash,
        role: body.role,
      },
    });

    return NextResponse.json(
      {
        message: "Sign up success",
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
