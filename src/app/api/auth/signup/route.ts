import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/server/prisma";
import { createSession } from "@/lib/server/createSession";
import { validate } from "@/lib/validation/validate";
import { signupRules } from "@/lib/validation/rules";

export async function POST(request: Request) {
  const values = Object(await request.json().catch(() => null)) as SignupValues;
  const errors = validate(values, signupRules);

  if (Object.keys(errors).length > 0) return NextResponse.json({ errors }, { status: 422 });

  const email = values.email.trim().toLowerCase();
  const data = await prisma.user.findUnique({ where: { email } });

  if (data) {
    return NextResponse.json(
      { errors: 
        { email: "This email is already registered" }
      }, 
      { status: 409 }
    );
  }

  const user = await prisma.user.create({
    data: {
      fullName: values.fullName.trim().replace(/\s+/g, " "),
      email,
      phone: values.phone.replace(/[\s-]/g, ""),
      password: await hash(values.password, 10),
    },
  });

  await createSession(user.id);
  return NextResponse.json({ ok: true }, { status: 201 });
}
