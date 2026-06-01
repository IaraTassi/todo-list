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
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");

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
      <header className="task-title">
        <h1>Gerenciador de Tarefas</h1>
      </header>

      <div className="task-container">
        <section className="task-controls">
          <div className="control-card">
            <TodoForm
              text={text}
              setText={setText}
              priority={priority}
              setPriority={setPriority}
              addTodo={handleAddTodo}
            />
          </div>

          <div className="control-card">
            <TodoFilter filter={filter} setFilter={setFilter} />
          </div>

          <div className="control-card">
            <button
              className="add-button"
              onClick={() =>
                handleAddTodo({
                  id: Date.now(),
                  text,
                  priority,
                  completed: false,
                })
              }
            >
              +
            </button>
          </div>
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
