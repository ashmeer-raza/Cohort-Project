import TaskCard from "./TaskCard";
import { Inbox } from "lucide-react";

export default function BoardColumn({ id, title, count, tasks, onDrop, onEdit, onDelete, onMove }) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDrop(e, id)}
      className="bg-gray-50 border border-gray-200 rounded-2xl p-3 min-h-[300px] flex flex-col"
    >
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="font-semibold text-sm">{title}</h3>
        <span className="text-xs bg-white border border-gray-200 rounded-full px-2 py-0.5">{count}</span>
      </div>
      <div className="space-y-2 flex-1">
        {tasks.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <Inbox size={24} className="mx-auto mb-2" />
            <p className="text-xs">No tasks here</p>
          </div>
        ) : tasks.map((t) => (
          <TaskCard key={t.id} task={t} onEdit={onEdit} onDelete={onDelete} onMove={onMove} />
        ))}
      </div>
    </div>
  );
}