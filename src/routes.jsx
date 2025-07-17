import HomePage from "./views/HomePage";
import StudentListPage from "./views/StudentListPage";

const routesConfig = [
  { path: "/", element: <HomePage /> },
  { path: "/alumnos", element: <StudentListPage /> },
];

export default routesConfig;
