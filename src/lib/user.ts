import prisma from "@lib/prisma";
import { User } from "@/types/user";

export const findUserByUsername = async (
  username: string
): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { username },
  });
};

export const findUserById = async (id: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id },
  });
};
