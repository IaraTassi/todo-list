export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <li className={`card ${todo.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span>{todo.text}</span>

      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  );
}
