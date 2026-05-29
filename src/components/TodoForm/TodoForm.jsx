import { useState } from "react";
import "./TodoForm.css";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Baixa");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    addTodo({
      id: Date.now(),
      text,
      priority,
      completed: false,
    });

    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Baixa</option>
        <option>Média</option>
        <option>Alta</option>
      </select>

      <button type="submit">Adicionar</button>
    </form>
  );
}
