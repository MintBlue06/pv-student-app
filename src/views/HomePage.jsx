import { Container, Heading, Text, Image, VStack } from "@chakra-ui/react";
import image from "../assets/background.jpg";

const HomePage = () => (
  <Container maxW="container.lg" centerContent py={10}>
    <VStack spacing={4} textAlign="center">
      <Heading as="h1" size="2xl">
        Bienvenido al Sistema de Gestión de Alumnos
      </Heading>
      <Text fontSize="lg" color="gray.500">
        Una aplicación moderna para administrar información de alumnos.
      </Text>
      <Image
        mt={8}
        borderRadius="lg"
        src={image}
        alt="Ilustración del sistema de alumnos"
      />
    </VStack>
  </Container>
);

export default HomePage;
