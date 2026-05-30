import { useState } from "react";
import "./App.css";
// import Welcome from "./components/Welcome/Welcome";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    return todo.priority.toLowerCase() === filter;
  });

  return (
    <main className="task-manager">
      {/* <Welcome /> */}

      <div className="task-container">
        <h1 className="task-title">Gerenciador de Tarefas</h1>

        <TodoForm addTodo={addTodo} />

        <TodoFilter filter={filter} setFilter={setFilter} />

        <TodoList
          todos={filteredTodos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          filter={filter}
        />
      </div>
    </main>
  );
}
