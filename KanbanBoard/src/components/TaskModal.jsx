import { useState } from "react";
import { X } from "lucide-react";

const EMPTY = { title: "", description: "", priority: "Medium", dueDate: "", status: "todo" };

export default function TaskModal({ initial, onClose, onSave }) {
  const [form, setForm] = useState(initial ?? EMPTY);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return setError("Title is required.");
    if (!form.dueDate) return setError("Due date is required.");
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-20">
      <form onSubmit={submit} className="bg-white rounded-2xl w-full max-w-md p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold">{initial ? "Edit Task" : "Add Task"}</h2>
          <button type="button" onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md"><X size={18} /></button>
        </div>

        {error && <p className="text-xs bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 mb-3">{error}</p>}

        <label className="text-xs font-medium">Title *</label>
        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 outline-none focus:border-black" placeholder="Task title" />

        <label className="text-xs font-medium">Description</label>
        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 outline-none focus:border-black" placeholder="Short details..." />

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div>
            <label className="text-xs font-medium">Priority</label>
            <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 mt-1">
              <option>Low</option><option>Medium</option><option>High</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium">Due date *</label>
            <input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 mt-1" />
          </div>
        </div>

        <label className="text-xs font-medium">Status</label>
        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-4">
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <div className="flex gap-2 justify-end">
          <button type="button" onClick={onClose} className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">Cancel</button>
          <button className="text-sm px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">{initial ? "Save" : "Add"}</button>
        </div>
      </form>
    </div>
  );
}