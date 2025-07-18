import { useNavigate } from "react-router-dom";
import { useStudents } from "../contexts/StudentContext";
import { StudentForm } from "../components/StudentForm";
import { Container } from "@chakra-ui/react";

const AddStudentPage = () => {
  const { addStudent } = useStudents();
  const navigate = useNavigate();

  const handleAddStudent = (studentData) => {
    const success = addStudent(studentData);
    if (success) {
      navigate("/alumnos");
    }
  };

  return (
    <Container py={10}>
      <StudentForm
        onSubmitForm={handleAddStudent}
        title="Agregar Nuevo Alumno"
      />
    </Container>
  );
};

export default AddStudentPage;
