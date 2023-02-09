import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getTeams() {
    return await prisma.team.findMany({ include: { members: { include: { commendations: { select: { id: true } }, sentCommendations: { select: { id: true } } } } }, orderBy: { name: "asc" } })
}