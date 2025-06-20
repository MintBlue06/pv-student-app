const App = () => {
  return (
    <>
      <div className="app-wrapper">
        <main className="main-content"></main>
        <footer className="app-footer">
          <p>
            &copy; {new Date().getFullYear()} Sistema de Gestión de Alumnos.
            Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
