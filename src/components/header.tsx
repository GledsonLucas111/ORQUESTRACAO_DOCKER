import { createTask } from "../actions/tasks";

export function Header() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 text-white">
        <h1 className="font-bold text-2xl tracking-tight">Minhas Tarefas</h1>
        <p className="text-blue-100 text-xs mt-1 font-medium opacity-90">
          Acompanhe o que é importante em tempo real.
        </p>
      </div>

      <form
        action={createTask}
        className="p-5 flex gap-2 bg-white border-b border-slate-100 items-center"
      >
        <input
          type="text"
          name="task"
          className="bg-slate-50 text-slate-800 h-11 rounded-xl border border-slate-200 w-full placeholder:text-slate-400 px-4 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm font-medium"
          placeholder="Adicione uma nova task..."
        />
        <button
          className="bg-indigo-600 h-11 w-11 shrink-0 rounded-xl flex items-center justify-center text-white text-2xl font-light cursor-pointer hover:bg-indigo-700 active:scale-95 transition-all shadow-sm shadow-indigo-200"
          type="submit"
        >
          +
        </button>
      </form>
    </>
  );
}