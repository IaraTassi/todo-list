export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div className={`card ${todo.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <div className="content">
        <p>{todo.text}</p>
        <small>Prioridade: {todo.priority}</small>
      </div>

      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
}
