import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStudents } from "../contexts/StudentContext";
import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  useColorModeValue,
  Button,
  Spinner,
  Center,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

const StudentDetailPage = () => {
  const { id } = useParams();
  const { getStudentByLu } = useStudents();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const boxBg = useColorModeValue("white", "gray.700");

  useEffect(() => {
    const fetchedStudent = getStudentByLu(id);
    if (fetchedStudent) {
      setStudent(fetchedStudent);
    } else {
      navigate("/404");
    }
  }, [id, getStudentByLu, navigate]);

  if (!student) {
    return (
      <Center h="200px">
        <Spinner />
      </Center>
    );
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl">
          Detalles del Alumno
        </Heading>
        <Box p={8} bg={boxBg} borderRadius="lg" shadow="md">
          <VStack spacing={4} align="stretch">
            <HStack>
              <Text fontWeight="bold" w="100px">
                LU:
              </Text>
              <Text>{student.lu}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold" w="100px">
                Nombre:
              </Text>
              <Text>{student.nombre}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold" w="100px">
                Apellido:
              </Text>
              <Text>{student.apellido}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold" w="100px">
                Curso:
              </Text>
              <Text>{student.curso}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold" w="100px">
                Email:
              </Text>
              <Text>{student.email}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold" w="100px">
                Domicilio:
              </Text>
              <Text>{student.domicilio}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold" w="100px">
                Teléfono:
              </Text>
              <Text>{student.teléfono}</Text>
            </HStack>
          </VStack>
        </Box>
        <Box textAlign="right">
          <Button onClick={() => navigate("/alumnos")} colorScheme="teal">
            <Icon
              as={MdArrowBack}
              boxSize={[5, 5, 6]}
              mr={[0, 0, 2]}
              verticalAlign="middle"
            >
              <MdArrowBack />
            </Icon>
            <Text display={["none", "none", "block"]}>Volver a la Lista</Text>
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default StudentDetailPage;
