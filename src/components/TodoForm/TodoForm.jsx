import "./TodoForm.css";

export default function TodoForm({ text, setText, priority, setPriority }) {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="task-input">Tarefa</label>

        <input
          id="task-input"
          type="text"
          placeholder="Nova tarefa"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="task-priority">Prioridade</label>

        <select
          id="task-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>
      </div>
    </form>
  );
}
