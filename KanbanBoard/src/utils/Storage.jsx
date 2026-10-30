const KEY = "kanban-tasks-v1";

const seed = [
  { id: "1", title: "Design landing page", description: "Simple wireframe in black and white", priority: "High", dueDate: "2026-11-02", status: "todo", createdAt: Date.now() },
  { id: "2", title: "Build API", description: "Tasks CRUD endpoints", priority: "Medium", dueDate: "2026-11-05", status: "in-progress", createdAt: Date.now() },
  { id: "3", title: "Setup README", description: "How to run the project", priority: "Low", dueDate: "2026-10-30", status: "completed", createdAt: Date.now() },
];

export function loadTasks() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch { return seed; }
}

export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}