import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import * as jose from "jose";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const cookieStore = cookies();

    const cannotFindUserError = "cannot find user";

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) throw Error(cannotFindUserError);

    const { hashPassword: hashPasswordUser, ...publicUser } = user;

    const isPasswordValid = await bcrypt.compare(
      body.password,
      hashPasswordUser
    );

    console.log("isPasswordValid", isPasswordValid);

    if (!isPasswordValid) {
      throw Error(cannotFindUserError);
    }

    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

    const token = await new jose.SignJWT(publicUser)
      .setProtectedHeader({ alg: "HS256" })
      .sign(secret);

    cookieStore.set("token", token);

    return NextResponse.json(
      {
        token,
      },
      {
        status: 200,
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
