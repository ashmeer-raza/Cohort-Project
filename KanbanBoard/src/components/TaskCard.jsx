import { Pencil, Trash2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const badge = {
  Low: "bg-gray-100 text-gray-600 border border-gray-200",
  Medium: "bg-gray-200 text-gray-800 border border-gray-300",
  High: "bg-black text-white border border-black",
};

const order = ["todo", "in-progress", "completed"];

export default function TaskCard({ task, onEdit, onDelete, onMove }) {
  const idx = order.indexOf(task.status);
  const overdue = new Date(task.dueDate) < new Date(new Date().toDateString()) && task.status !== "completed";

  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)}
      className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition cursor-grab"
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-medium text-sm">{task.title}</h4>
        <span className={`text-[11px] px-2 py-0.5 rounded-full ${badge[task.priority]}`}>{task.priority}</span>
      </div>
      {task.description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{task.description}</p>}
      <div className={`flex items-center gap-1 text-xs mt-2 ${overdue ? "text-black font-medium" : "text-gray-500"}`}>
        <Calendar size={13} /> {task.dueDate} {overdue && "• Overdue"}
      </div>
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
        <div className="flex gap-1">
          <button disabled={idx===0} onClick={()=>onMove(task.id, order[idx-1])} className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-30"><ChevronLeft size={15}/></button>
          <button disabled={idx===2} onClick={()=>onMove(task.id, order[idx+1])} className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-30"><ChevronRight size={15}/></button>
        </div>
        <div className="flex gap-1">
          <button onClick={()=>onEdit(task)} className="p-1.5 rounded-md hover:bg-gray-100"><Pencil size={14}/></button>
          <button onClick={()=>{ if(confirm("Delete this task?")) onDelete(task.id); }} className="p-1.5 rounded-md hover:bg-gray-100 hover:text-black"><Trash2 size={14}/></button>
        </div>
      </div>
    </div>
  );
}