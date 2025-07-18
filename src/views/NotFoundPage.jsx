import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Container,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

const NotFoundPage = () => (
  <Container centerContent py={20}>
    <VStack spacing={4} textAlign="center">
      <Heading as="h1" size="4xl" color="red.500">
        404
      </Heading>
      <Heading as="h2" size="xl">
        Página No Encontrada
      </Heading>
      <Text fontSize="lg" color="gray.500">
        Lo sentimos, la página que estás buscando no existe.
      </Text>
      <Button as={RouterLink} to="/" colorScheme="teal" mt={8}>
        <Icon
          as={MdHome}
          boxSize={[5, 5, 6]}
          mr={[0, 0, 2]}
          verticalAlign="middle"
        >
          <MdHome />
        </Icon>
        <Text display={["none", "none", "block"]}>Volver al Inicio</Text>
      </Button>
    </VStack>
  </Container>
);

export default NotFoundPage;
