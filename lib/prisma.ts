import pkg from "@prisma/client";

const { PrismaClient } = pkg;

let prisma_client: pkg.PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma_client = new PrismaClient();
} else {
  if (!global.prima) {
    global.prisma = new PrismaClient();
  }

  prisma_client = global.prisma;
}

export default prisma_client;
