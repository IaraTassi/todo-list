export function addTodo(todos, todo) {
  return [...todos, todo];
}

export function toggleTodo(todos, id) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
}

export function filterTodos(todos, filter) {
  if (filter === "all") return todos;

  return todos.filter((todo) => todo.priority === filter);
}

export function removeTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}
