import { Commendation, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCommendation = async (sender: string, recipient: string, msg: string) => {
  return await prisma.commendation.create({
    data: {
      senderId: sender,
      recipientId: recipient,
      message: msg
    }
  });
}

export const readAllCommendations = async () => {
  return await prisma.commendation.findMany()
}

export const readAllMembers = async () => {
  return await prisma.member.findMany()
}