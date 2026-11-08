import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/server/prisma";
import { createSession } from "@/lib/server/createSession";
import { validate } from "@/lib/validation/validate";
import { loginRules } from "@/lib/validation/rules";

export async function POST(request: Request) {
  const values = Object(await request.json().catch(() => null)) as LoginValues;

  const errors = validate(values, loginRules);

  if (Object.keys(errors).length > 0) return NextResponse.json({ errors }, { status: 422 });

  const user = await prisma.user.findUnique({ where: { email: values.email.trim().toLowerCase() } });
  const comapreValues = user ? await compare(values.password, user.password) : false;

  if (!user || !comapreValues) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  await createSession(user.id);
  return NextResponse.json({ ok: true });
}
