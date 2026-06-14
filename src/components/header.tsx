import { createTask } from "../actions/tasks";

export function Header() {
  return (
    <>
      <div className="bg-[#3B82F6] px-8 py-6">
        <h1 className="font-bold text-[28px]">Minhas Tasks</h1>
        <p className="text-sm">Acompanhe o que é importante</p>
      </div>
      <form
        action={createTask}
        className="p-6 flex justify-around gap-3 border-[#E2E8F0] border-b-[0.5px]"
      >
        <input
          type="text"
          name="task"
          className="bg-white text-gray-900 h-11 rounded-md border-[#CBD5E1] w-full placeholder:text-gray-500 px-4"
          placeholder="Adicione nova task..."
        />
        <button className="bg-[#3B82F6] h-11 p-3 rounded-md flex items-center justify-cente text-xl cursor-pointer hover:bg-[#2563EB] transition-colors" type="submit">
          +
        </button>
      </form>
    </>
  );
}