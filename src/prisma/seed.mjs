import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

await prisma.user.upsert({
  where: { email: "admin@cdec.club" },
  update: {},
  create: {
    fullName: "Admin Cdec",
    email: "admin@cdec.club",
    phone: "+213070000000",
    password: await bcrypt.hash("passwordCdec", 10),
  },
});

await prisma.$disconnect();
