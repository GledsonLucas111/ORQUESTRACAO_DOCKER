"use client";

import { Prisma } from "@/src/generated/prisma/client";
import { twMerge } from "tailwind-merge";
import { deleteTask, updateTask } from "../actions/tasks";

type Todo = {
  todo: Prisma.TaskCreateInput;
};

export function Todo({ todo }: Todo) {
  return (
    <div
      className={twMerge(
        "p-3 w-full border-gray-300 border-[0.5px] flex items-center justify-between rounded-md",
        todo.done && "bg-[#FEF2F2] border-[#FECACA]",
      )}
    >
      <h1 className={twMerge("text-white w-full", todo.done && "text-red-500 line-through")} onClick={()=> updateTask(todo.id as string, todo.done as boolean)}>
        {todo.task}
      </h1>
      <button onClick={()=> deleteTask(todo.id as string)}
        className={twMerge(
          "border-2 font-bold px-2 py-1 border-[#94A3B8] text-[#94A3B8] cursor-pointer rounded-md hover:bg-[#ee5959] hover:border-[#ee5959] hover:text-white transition-colors",
          todo.done && "border-[#FCA5A5] text-[#FCA5A5]",
        )}
      >
        X
      </button>
    </div>
  );
}