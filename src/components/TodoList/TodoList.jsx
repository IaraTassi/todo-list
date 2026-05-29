import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
