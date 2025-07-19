# Sistema de Gestión de Alumnos - PV Student App

Este es un proyecto de aplicación web desarrollado con React para la gestión integral de datos de alumnos. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de estudiantes, implementando una arquitectura moderna con componentes funcionales, hooks, y gestión de estado centralizada.

## ✨ Características Principales

- **Gestión Completa de Alumnos (CRUD):**
  - **Agregar:** Formulario para registrar nuevos alumnos.
  - **Visualizar:** Lista completa de alumnos en formato de tarjetas.
  - **Editar:** Formulario pre-cargado para modificar la información de un alumno existente.
  - **Eliminar:** Opción para borrar alumnos con un diálogo de confirmación.
  - **Ver Detalles:** Vista dedicada con toda la información de un alumno.
- **Navegación Fluida:** Sistema de enrutamiento basado en `react-router-dom` con el hook `useRoutes` para una configuración limpia y centralizada.
- **Interfaz de Usuario Moderna:** Diseñada con la librería de componentes **Chakra UI**, asegurando accesibilidad y un diseño profesional.
- **Tema Claro y Oscuro:** Soporte para cambiar entre modos de color, con la preferencia del usuario guardada en el `localStorage`.
- **Gestión de Estado Centralizada:**
  - **Context API y `useReducer`:** Para un manejo de estado predecible y escalable.
  - **Capa de Servicio:** Lógica de negocio abstraída para interactuar con los datos (actualmente `localStorage`), facilitando futuras migraciones a una API real.
- **Notificaciones Integradas:** Uso del hook `useToast` de Chakra UI para feedback al usuario tras realizar acciones.

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - [**React**](https://reactjs.org/) (v18+) con Hooks.
  - [**Vite**](https://vitejs.dev/) como herramienta de construcción y servidor de desarrollo.
- **Enrutamiento:**
  - [**React Router DOM**](https://reactrouter.com/) (v6+) utilizando el hook `useRoutes`.
- **UI y Estilos:**
  - [**Chakra UI**](https://chakra-ui.com/) para componentes de interfaz de usuario.
  - [**Emotion**](https://emotion.sh/) para estilos CSS-in-JS (requerido por Chakra UI).
  - [**Framer Motion**](https://www.framer.com/motion/) para animaciones (requerido por Chakra UI).
- **Gestión de Estado:**
  - **React Context API** junto con el hook `useReducer`.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura organizada para separar responsabilidades y facilitar la mantenibilidad:

/src\
|-- /components/ # Componentes reutilizables (NavBar, StudentCard, etc.)\
|-- /contexts/ # Proveedores de Contexto (StudentContext)\
|-- /views/ # Componentes que representan páginas completas\
|-- /services/ # Lógica de negocio y acceso a datos (studentService)\
|-- App.jsx # Componente principal que renderiza las rutas\
|-- main.jsx # Punto de entrada de la aplicación\
|-- routes.js # Configuración centralizada de las rutas\
|-- theme.js # Configuración del tema de Chakra UI

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener [Node.js](https://nodejs.org/) (v16 o superior) instalado. Luego, ejecuta:

    ```bash
    npm install
    ```

    Esto instalará React, Chakra UI y todas las demás dependencias necesarias.

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite en tu terminal).

## 📄 Uso de la Aplicación

- **Navega** a través de los enlaces en la barra de navegación para acceder a las diferentes secciones.
- **Agrega** un nuevo alumno desde la sección "Nuevo" o el botón en la lista de alumnos.
- **Edita o elimina** un alumno usando los botones correspondientes en cada tarjeta.
- **Cambia el tema** de color usando el ícono de sol/luna en la barra de navegación.
