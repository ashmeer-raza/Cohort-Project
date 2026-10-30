import { useMemo, useState } from "react";
import { useTasks } from "./hooks/useTask.jsx";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import BoardColumn from "./components/BoardColumn";
import TaskModal from "./components/TaskModal";

const COLS = [
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "In Progress" },
  { id: "completed", title: "Completed" },
];

export default function App() {
  const { tasks, addTask, updateTask, deleteTask, moveTask } = useTasks();
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("all");
  const [status, setStatus] = useState("all");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState("");

  const show = (m) => { setToast(m); setTimeout(() => setToast(""), 2000); };

  const filtered = useMemo(() => tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()) &&
    (priority === "all" || t.priority === priority) &&
    (status === "all" || t.status === status)
  ), [tasks, search, priority, status]);

  const visibleCols = COLS.filter((c) => status === "all" || status === c.id);

  const handleDrop = (e, colId) => {
    const id = e.dataTransfer.getData("taskId");
    if (id) { moveTask(id, colId); show("Task moved"); }
  };

  const handleSave = (data) => {
    if (editing) { updateTask(editing.id, data); show("Task updated"); }
    else { addTask(data); show("Task added"); }
    setEditing(null);
  };

  return (
    <div className="min-h-screen">
      <Header onAdd={() => { setEditing(null); setOpen(true); }} />
      <main className="max-w-6xl mx-auto px-4 py-5 space-y-4">
        <FilterBar search={search} setSearch={setSearch} priority={priority} setPriority={setPriority} status={status} setStatus={setStatus} />

        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl py-16 text-center">
            <p className="font-medium">No tasks found</p>
            <p className="text-sm text-gray-500 mt-1">Try a different search or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {visibleCols.map((c) => (
              <BoardColumn
                key={c.id} id={c.id} title={c.title}
                tasks={filtered.filter((t) => t.status === c.id)}
                count={filtered.filter((t) => t.status === c.id).length}
                onDrop={handleDrop}
                onEdit={(t) => { setEditing(t); setOpen(true); }}
                onDelete={(id) => { deleteTask(id); show("Task deleted"); }}
                onMove={(id, s) => { moveTask(id, s); show("Task moved"); }}
              />
            ))}
          </div>
        )}
      </main>

      {open && (
  <TaskModal
    key={editing ? editing.id : "new"}
    initial={editing}
    onClose={() => { setOpen(false); setEditing(null); }}
    onSave={handleSave}
  />
)}

      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}