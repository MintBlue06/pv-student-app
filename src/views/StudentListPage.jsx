import { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useStudents } from "../contexts/StudentContext";
import { StudentCard } from "../components/StudentCard";
import { ConfirmationDialog } from "../components/ConfirmationDialog";
import {
  Container,
  Heading,
  Button,
  SimpleGrid,
  Flex,
  Spacer,
  Text,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { MdHome, MdPerson, MdPersonAdd } from "react-icons/md";

const StudentListPage = () => {
  const { state, deleteStudent } = useStudents();
  const [studentToDelete, setStudentToDelete] = useState(null);
  const navigate = useNavigate();

  const handleConfirmDelete = () => {
    if (studentToDelete) {
      deleteStudent(studentToDelete.lu);
    }
    setStudentToDelete(null);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Flex mb={8} align="center">
        <Heading as="h1" size="xl">
          <HStack>
            <Icon as={MdPerson} mr={2} />
            <Text>Lista de Alumnos</Text>
          </HStack>
        </Heading>
        <Spacer />
        <Button
          as={RouterLink}
          to="/alumnos/nuevo"
          colorScheme="teal"
          alignItems="center"
          px={[2, 2, 4]}
        >
          <Icon
            as={MdPersonAdd}
            boxSize={[5, 5, 6]}
            mr={[0, 0, 2]}
            verticalAlign="middle"
          />
          <Text display={["none", "none", "block"]}>Agregar Nuevo Alumno</Text>
        </Button>
      </Flex>
      {state.students && state.students.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {state.students.map((student) => (
            <StudentCard
              key={student.lu}
              student={student}
              onDelete={() => setStudentToDelete(student)}
              onViewDetails={(lu) => navigate(`/alumnos/${lu}`)}
              onEdit={(lu) => navigate(`/alumnos/${lu}/editar`)}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Text textAlign="center" fontSize="lg" color="gray.500">
          No hay alumnos registrados.
        </Text>
      )}
      <ConfirmationDialog
        isOpen={!!studentToDelete}
        onClose={() => setStudentToDelete(null)}
        onConfirm={handleConfirmDelete}
        title="Confirmar Eliminación"
        message={`¿Estás seguro de que deseas eliminar al alumno ${studentToDelete?.nombre} ${studentToDelete?.apellido}?`}
      />
      <Button as={RouterLink} to="/" colorScheme="teal" mt={8}>
        <Icon
          as={MdHome}
          boxSize={[5, 5, 6]}
          mr={[0, 0, 2]}
          verticalAlign="middle"
        />
        <Text display={["none", "none", "block"]}>Volver al Inicio</Text>
      </Button>
    </Container>
  );
};

export default StudentListPage;
