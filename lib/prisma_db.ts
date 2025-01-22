import { PrismaClient } from "@prisma/client";
/* eslint-disable no-var */

declare global {
  // Declare the Prisma Client in the global namespace
  var prisma: PrismaClient | undefined;
}

const prismaDb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaDb;
}

export default prismaDb;
