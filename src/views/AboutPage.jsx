import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Text,
  VStack,
  Link,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdHome } from "react-icons/md";

const AboutPage = () => {
  const boxBg = useColorModeValue("white", "gray.700");
  const LinkedInUrl =
    "https://www.linkedin.com/in/matias-carlos-alvarez-a8aba9251";
  const GitHubUrl = "https://github.com/MintBlue06/pv-student-app";

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Acerca de la Aplicación
        </Heading>
        <Box p={8} bg={boxBg} borderRadius="lg" shadow="md" w="100%">
          <VStack align="start" spacing={4}>
            <Text>
              Esta aplicación fue desarrollada como un proyecto demostrativo
              utilizando tecnologías modernas de React.
            </Text>
            <Heading as="h2" size="md">
              Tecnologías Utilizadas:
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                React (Hooks, Context, Reducer)
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                React Router DOM (con useRoutes)
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Chakra UI (con useToast)
              </ListItem>
            </List>
            <Text pt={4}>
              <strong>Desarrollador:</strong> Matias Carlos Alvarez y Gemini AI
            </Text>
            <HStack>
              {GitHubUrl && (
                <Link href={GitHubUrl} isExternal>
                  <Icon
                    as={AiOutlineGithub}
                    boxSize={8}
                    aria-label="GitHub del proyecto"
                  />
                  <Text>GitHub</Text>
                </Link>
              )}
              {LinkedInUrl && (
                <Link href={LinkedInUrl} isExternal mr={4}>
                  <Icon
                    as={AiFillLinkedin}
                    boxSize={8}
                    color="blue.500"
                    aria-label="LinkedIn"
                  />
                  <Text>LinkedIn</Text>
                </Link>
              )}
            </HStack>
          </VStack>
          <Button as={RouterLink} to="/" colorScheme="teal" mt={8}>
            <Icon
              as={MdHome}
              boxSize={[5, 5, 6]}
              mr={[0, 0, 2]}
              verticalAlign="middle"
            />
            <Text display={["none", "none", "block"]}>Volver al Inicio</Text>
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default AboutPage;
