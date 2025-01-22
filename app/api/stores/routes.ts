import prismaDb from "@/lib/prisma_db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    //Await the promise
    const { userId } = await auth();
    const { name } = await req.json();
    //Store creation
    const store = await prismaDb.store.create({
      data: {
        name,
        userId,
      },
    });
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    return NextResponse.json(store);
  } catch (error) {
    console.log(error, "--STORE POST REQUEST ON SERVER SIDE");
    return new NextResponse("Internal error", { status: 500 });
  }
}
