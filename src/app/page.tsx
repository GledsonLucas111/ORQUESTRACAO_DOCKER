import { Header } from "../components/header";
import { Todo } from "../components/todo";
import { prisma } from "../lib/prisma";

export default async function Home() {
  const todos = await prisma.task.findMany();

  return (
    <div>
      <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center items-start">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col overflow-hidden min-h-[550px]">
          <Header />

          <div className="flex gap-2.5 flex-col px-6 mt-5 overflow-y-auto max-h-[380px] custom-scrollbar">
            {todos.length === 0 ? (
              <div className="text-center py-10 text-slate-400 text-sm">
                Nenhuma tarefa por aqui ainda.
              </div>
            ) : (
              todos.map((todo) => {
                return <Todo todo={todo} key={todo.id} />;
              })
            )}
          </div>

          <div className="mt-auto p-6 border-t border-slate-50 bg-slate-50/50 flex justify-between items-center">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {todos.filter((todo) => todo.done === false).length} tasks
              restantes
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}