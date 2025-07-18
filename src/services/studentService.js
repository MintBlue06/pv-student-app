const STORAGE_KEY = "students_app_data_chakra";

const getInitialStudents = () => {
  return [
    {
      lu: "APU00999",
      nombre: "María Eugenia",
      apellido: "Diaz",
      curso: "Tercero",
      email: "mariadiaz@mail.com",
      domicilio: "Av. Congreso 125",
      teléfono: "3884895999",
    },
    {
      lu: "APU01000",
      nombre: "Juan Carlos",
      apellido: "Perez",
      curso: "Cuarto",
      email: "juancperez@mail.com",
      domicilio: "Calle Falsa 123",
      teléfono: "3881234567",
    },
    {
      lu: "APU01001",
      nombre: "Ana Lucía",
      apellido: "Gomez",
      curso: "Tercero",
      email: "anagomez@mail.com",
      domicilio: "Belgrano 450",
      teléfono: "3887654321",
    },
  ];
};

const loadStudents = () => {
  const storedStudents = localStorage.getItem(STORAGE_KEY);
  if (storedStudents) {
    try {
      const parsedStudents = JSON.parse(storedStudents);
      return Array.isArray(parsedStudents)
        ? parsedStudents
        : getInitialStudents();
    } catch (error) {
      return getInitialStudents();
    }
  }
  return getInitialStudents();
};

const saveStudents = (students) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
};

let students = loadStudents();
if (localStorage.getItem(STORAGE_KEY) === null) {
  saveStudents(students);
}

const studentService = {
  getAllStudents: () => [...students],
  getStudentByLu: (lu) => students.find((s) => s.lu === lu) || null,
  addStudent: (student) => {
    if (students.some((s) => s.lu === student.lu))
      throw new Error(`El LU ${student.lu} ya existe.`);
    students.push({ ...student });
    saveStudents(students);
    return student;
  },
  updateStudent: (lu, data) => {
    const i = students.findIndex((s) => s.lu === lu);
    if (i === -1) throw new Error(`LU ${lu} no encontrado.`);
    students[i] = { ...students[i], ...data, lu };
    saveStudents(students);
    return students[i];
  },
  deleteStudent: (lu) => {
    const len = students.length;
    students = students.filter((s) => s.lu !== lu);
    if (students.length === len) throw new Error(`LU ${lu} no encontrado.`);
    saveStudents(students);
    return true;
  },
};

export default studentService;
