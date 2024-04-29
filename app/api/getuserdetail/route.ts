// app/api/getuserdetail/route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  const user = await prisma.user.findFirst({
    where: { email },
  });
  const userdeets = await prisma.userdata.findFirst({
    where: { email },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  const emission = user.emission || 4.5;
  const userData = {
    name: user.name,
    email,
    emission,
    userdeets
  };

  return new Response(JSON.stringify(userData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}