import prisma from "@lib/prisma";

export const createTodo = async (title: string, userId: string) => {
  return prisma.todo.create({
    data: {
      title,
      userId,
    },
  });
};

export const getTodos = async (userId: string) => {
  return prisma.todo.findMany({
    where: { userId },
  });
};

export const getTodoById = async (id: string) => {
  return prisma.todo.findUnique({
    where: { id },
  });
};

export const deleteTodo = async (id: string) => {
  return prisma.todo.delete({
    where: { id },
  });
};

export const toggleCompleted = async (id: string, completed: boolean) => {
  return prisma.todo.update({
    where: { id },
    data: { completed },
  });
};
