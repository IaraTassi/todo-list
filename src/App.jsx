import { useState } from "react";
import "./App.css";
// import Welcome from "./components/Welcome/Welcome";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <main className="task-manager">
      {/* <Welcome /> */}

      <div className="task-container">
        <h1 className="task-title">Gerenciador de Tarefas</h1>

        <TodoForm addTodo={addTodo} />

        <TodoList todos={todos} />
      </div>
    </main>
  );
}
