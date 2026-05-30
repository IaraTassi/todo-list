export default function TodoFilter({ filter, setFilter }) {
  return (
    <div className="todo-filter">
      <label htmlFor="priority-filter">Filtro</label>

      <select
        id="priority-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="low">Baixa</option>
        <option value="medium">Média</option>
        <option value="high">Alta</option>
      </select>
    </div>
  );
}
