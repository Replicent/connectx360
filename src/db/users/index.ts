import { getPrismaClient } from "@/utils/app-utils";
import { UserType } from "@/types";

const prisma = getPrismaClient();

export async function createUser(data: UserType) {
  return await prisma.users.create({
    data,
  });
}

export async function getUserByFirebaseId(firebaseid: string) {
  return await prisma.users.findUnique({
    where: { firebaseid },
  });
}
