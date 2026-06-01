import "./TodoItem.css";

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <li className={`card ${todo.completed ? "done" : ""}`}>
      <button className="todo-check" onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="1.5"
              stroke="currentColor"
            />

            <path
              d="M4 8L7 11L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="15"
              height="15"
              rx="1.5"
              stroke="currentColor"
            />
          </svg>
        )}
      </button>

      <span className="todo-text">{todo.text}</span>

      <button className="remove-button" onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </li>
  );
}
