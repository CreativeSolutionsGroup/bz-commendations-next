import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const emailToId = async (sender: string) => {
  const member = await prisma.member.findFirst({ where: { email: sender } });

  if (!member) {
    return;
  }

  const { id } = member;

  return id as string
}

export const createCommendation = async (sender: string, recipient: string, msg: string) => {
  return await prisma.commendation.create({
    data: {
      sender: {
        connect: {
          id: sender
        }
      },
      recipient: {
        connect: {
          id: recipient
        }
      },
      message: msg
    }
  });
}

export const readAllCommendations = async () => {
  return await prisma.commendation.findMany()
}

export const readAllMembers = async () => {
  return await prisma.member.findMany({
    include: {
      team: true
    }
  })
}

export const updateMemberImageURL = async (image: string, id: string) => {
  return await prisma.member.update({
    data: {
      imageURL: image
    },
    where: {
      id
    }
  })
}