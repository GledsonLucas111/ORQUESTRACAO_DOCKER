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
        "p-3.5 w-full border border-slate-100 flex items-center justify-between rounded-xl bg-white shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-md",
        todo.done &&
          "bg-slate-50/80 border-slate-100/70 opacity-70 shadow-none hover:shadow-none",
      )}
    >
      <div
        className="flex items-center gap-3 w-full cursor-pointer select-none"
        onClick={() => updateTask(todo.id as string, todo.done as boolean)}
      >
        <div
          className={twMerge(
            "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0",
            todo.done
              ? "bg-emerald-500 border-emerald-500"
              : "border-slate-300 bg-white group-hover:border-slate-400",
          )}
        >
          {todo.done && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>

        <h1
          className={twMerge(
            "text-slate-700 text-sm font-medium transition-all duration-200 break-all pr-2",
            todo.done && "text-slate-400 line-through font-normal",
          )}
        >
          {todo.task}
        </h1>
      </div>

      <button
        onClick={() => deleteTask(todo.id as string)}
        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 cursor-pointer rounded-lg transition-all shrink-0 active:scale-90"
        title="Excluir tarefa"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}