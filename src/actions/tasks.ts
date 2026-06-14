"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma";

export async function createTask(data: FormData) {

  const task = data.get("task") as string;

  await prisma.task.create({
    data: {
      task,
    },
  });

  revalidatePath("/");
}

export async function updateTask(id: string, done: boolean) {
  await prisma.task.update({
    data: {
      done: !done,
    },
    where: {
      id,
    },
  });
  revalidatePath("/");
}

export async function deleteTask(id: string) {
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
}