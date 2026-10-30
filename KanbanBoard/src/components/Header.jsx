import { Plus, LayoutDashboard } from "lucide-react";

export default function Header({ onAdd }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
            <LayoutDashboard size={18} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">Kanban</h1>
            <p className="text-xs text-gray-500">Simple task board</p>
          </div>
        </div>
        <button onClick={onAdd} className="flex items-center gap-1 bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800">
          <Plus size={16} /> Add Task
        </button>
      </div>
    </header>
  );
}