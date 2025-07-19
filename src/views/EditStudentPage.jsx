import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStudents } from "../contexts/StudentContext";
import StudentForm from "../components/StudentForm";
import { Container, Spinner, Center } from "@chakra-ui/react";

const EditStudentPage = () => {
  const { id } = useParams();
  const { getStudentByLu, updateStudent } = useStudents();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const studentToEdit = getStudentByLu(id);
    if (studentToEdit) {
      setStudent(studentToEdit);
    } else {
      navigate("/404");
    }
  }, [id, getStudentByLu, navigate]);

  const handleEditStudent = (studentData) => {
    const success = updateStudent(id, studentData);
    if (success) {
      navigate("/alumnos");
    }
  };

  if (!student) {
    return (
      <Center h="200px">
        <Spinner />
      </Center>
    );
  }

  return (
    <Container py={10}>
      <StudentForm
        initialData={student}
        onSubmitForm={handleEditStudent}
        isEditMode={true}
        title="Editar Alumno"
      />
    </Container>
  );
};

export default EditStudentPage;
