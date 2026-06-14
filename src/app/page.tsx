import { Header } from "../components/header";
import { Todo } from "../components/todo";
import { prisma } from "../lib/prisma";

export default async function Home() {

  const todos = await prisma.task.findMany();

  return (
    <div>
      <Header />
      <div className="flex gap-1 flex-col px-3 mt-4">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
      <div className="mt-auto p-6">
        <h3 className="text-sm text-[#647488]">
          {todos.filter((todo) => todo.done === false).length} tasks restantes
        </h3>
      </div>
    </div>
  );
}