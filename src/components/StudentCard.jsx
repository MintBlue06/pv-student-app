import {
  Box,
  Heading,
  Text,
  Button,
  ButtonGroup,
  VStack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { MdDelete, MdInfo, MdModeEdit } from "react-icons/md";

export const StudentCard = ({ student, onDelete, onViewDetails, onEdit }) => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
      <VStack align="stretch">
        <Heading fontSize="xl">
          {student.nombre} {student.apellido}
        </Heading>
        <Text>
          <strong>LU:</strong> {student.lu}
        </Text>
        <Text>
          <strong>Curso:</strong> {student.curso}
        </Text>
        <ButtonGroup justifyContent="flex-end">
          <Button onClick={() => onViewDetails(student.lu)} px={[2, 2, 4]}>
            <Icon as={MdInfo} boxSize={[5, 5, 6]} mr={[0, 0, 2]} />
            <Text display={["none", "none", "block"]}>Detalles</Text>
          </Button>
          <Button
            onClick={() => onEdit(student.lu)}
            px={[2, 2, 4]}
            colorScheme="yellow"
          >
            <Icon as={MdModeEdit} boxSize={[5, 5, 6]} mr={[0, 0, 2]} />
            <Text display={["none", "none", "block"]}>Editar</Text>
          </Button>
          <Button
            onClick={() => onDelete(student.lu)}
            px={[2, 2, 4]}
            colorScheme="red"
          >
            <Icon as={MdDelete} boxSize={[5, 5, 6]} mr={[0, 0, 2]} />
            <Text display={["none", "none", "block"]}>Eliminar</Text>
          </Button>
        </ButtonGroup>
      </VStack>
    </Box>
  );
};
