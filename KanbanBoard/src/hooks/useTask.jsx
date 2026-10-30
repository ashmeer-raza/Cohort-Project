import { useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../utils/storage";

export function useTasks() {
  const [tasks, setTasks] = useState(() => loadTasks());

  useEffect(() => { saveTasks(tasks); }, [tasks]);

  const addTask = (data) => {
    setTasks((p) => [...p, { ...data, id: crypto.randomUUID(), createdAt: Date.now() }]);
  };
  const updateTask = (id, data) => {
    setTasks((p) => p.map((t) => (t.id === id ? { ...t, ...data } : t)));
  };
  const deleteTask = (id) => {
    setTasks((p) => p.filter((t) => t.id !== id));
  };
  const moveTask = (id, status) => {
    setTasks((p) => p.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return { tasks, addTask, updateTask, deleteTask, moveTask };
}