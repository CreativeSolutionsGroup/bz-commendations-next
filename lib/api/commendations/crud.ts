import { Commendation, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCommendation = async (body: any) => {
  
  /*
  return await prisma.commendation.create({
    data: {
      message
    }
  });
  */
}

export const readAllCommendations = async () => {
  return await prisma.commendation.findMany()
}