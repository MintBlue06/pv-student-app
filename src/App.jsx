import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <div className="app-wrapper">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <p>
              &copy; {new Date().getFullYear()} Sistema de Gestión de Alumnos.
              Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </Router>
    </>
  );
};

export default App;
