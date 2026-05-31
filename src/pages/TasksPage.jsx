import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import "../App.css";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  filterTodos,
} from "../uttils/todoUtils";
import "./TasksPage.css";

export default function TasksPage() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("all");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("all", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    setTodos(addTodo(todos, todo));
  };

  const handleRemoveTodo = (id) => {
    setTodos(removeTodo(todos, id));
  };

  const handleToggleTodo = (id) => {
    setTodos(toggleTodo(todos, id));
  };

  const filteredTodos = filterTodos(todos, filter);

  return (
    <main className="task-manager">
      <header>
        <h1 className="task-title">Gerenciador de Tarefas</h1>
      </header>

      <div className="task-container">
        <section className="task-controls">
          <TodoForm addTodo={handleAddTodo} />
          <TodoFilter filter={filter} setFilter={setFilter} />
        </section>

        <section className="task-list">
          <TodoList
            todos={filteredTodos}
            removeTodo={handleRemoveTodo}
            toggleTodo={handleToggleTodo}
          />
        </section>
      </div>
    </main>
  );
}
