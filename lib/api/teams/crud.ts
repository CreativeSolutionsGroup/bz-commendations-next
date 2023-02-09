import { prisma } from "../db";

export const getTeams = async () => {
    return await prisma
        .team
        .findMany({ include: { members: { include: { commendations: { select: { id: true } }, sentCommendations: { select: { id: true } } } } }, orderBy: { name: "asc" } })
}