import { Commendation, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCommendation = async (msg: string) => {
  return await prisma.commendation.create({
    data: {
      id: "",
      message: msg,
    }
  });
}

export const readAllCommendations = async () => {
  return await prisma.commendation.findMany()
}

export const readAllMembers = async () => {
  return await prisma.member.findMany()
}