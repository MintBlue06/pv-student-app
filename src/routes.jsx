import HomePage from "./views/HomePage";
import StudentListPage from "./views/StudentListPage";
import AddStudentPage from "./views/AddStudentPage";
import EditStudentPage from "./views/EditStudentPage";
import StudentDetailPage from "./views/StudentDetailPage";
import NotFoundPage from "./views/NotFoundPage";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/alumnos", element: <StudentListPage /> },
  { path: "/alumnos/nuevo", element: <AddStudentPage /> },
  { path: "/alumnos/:id", element: <StudentDetailPage /> },
  { path: "/alumnos/:id/editar", element: <EditStudentPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routesConfig;
