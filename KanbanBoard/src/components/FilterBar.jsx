import { Search } from "lucide-react";

export default function FilterBar({ search, setSearch, priority, setPriority, status, setStatus }) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:items-center">
      <div className="relative flex-1">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title..."
          className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:border-black"
        />
      </div>
      <div className="flex gap-2">
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <option value="all">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <option value="all">All Status</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
}