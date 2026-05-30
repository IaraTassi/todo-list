import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import "../App.css";

export default function TasksPage() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("all");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("all", JSON.stringify(todos));
  }, [todos]);

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
    return todo.priority === filter;
  });

  return (
    <main className="task-manager">
      <header>
        <h1 className="task-title">Gerenciador de Tarefas</h1>
      </header>

      <div className="task-container">
        <section className="task-controls">
          <TodoForm addTodo={addTodo} />
          <TodoFilter filter={filter} setFilter={setFilter} />
        </section>

        <section className="task-list">
          <TodoList
            todos={filteredTodos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </section>
      </div>
    </main>
  );
}
