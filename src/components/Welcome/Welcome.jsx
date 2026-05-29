import "./Welcome.css";

export default function Welcome() {
  return (
    <main className="welcome">
      <div className="welcome-content">
        <h2 className="welcome-title">Bem-vindo ao Gerenciador de Tarefas!</h2>

        <p className="welcome-description">
          Organize suas tarefas diárias de forma eficiente.
        </p>
      </div>
    </main>
  );
}
