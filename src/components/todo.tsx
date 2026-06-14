"use client";

import { Prisma } from "@/src/generated/prisma/client";
import { twMerge } from "tailwind-merge";
import { updateTask } from "../actions/tasks";

type Todo = {
  todo: Prisma.TaskCreateInput;
};

export function Todo({ todo }: Todo) {
  return (
    <button
      className={twMerge(
        "p-3 w-full border-gray-300 border-[0.5px] flex items-center justify-between",
        todo.done && "bg-[#FEF2F2] border-[#FECACA]",
      )}
      onClick={()=> updateTask(todo.id as string, todo.done as boolean)}
    >
      <h1 className={twMerge("text-white", todo.done && "text-red-500")}>
        {todo.task}
      </h1>
      <h1
        className={twMerge(
          "border-2 font-bold px-2 py-1 border-[#94A3B8] text-[#94A3B8]",
          todo.done && "border-[#FCA5A5] text-[#FCA5A5]",
        )}
      >
        X
      </h1>
    </button>
  );
}