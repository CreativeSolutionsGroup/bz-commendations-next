import { Commendation, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCommendation = async (message: string) => {
  return await prisma.commendation.create({
    data: {
      message
    }
  });
}

export const readAllCommendations = async () => {
  return await prisma.commendation.findMany()
}