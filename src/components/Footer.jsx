import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box
    as="footer"
    bg="teal.500"
    color="white"
    py={4}
    mt="auto"
    textAlign="center"
    shadow="md"
  >
    <Text>
      &copy; {new Date().getFullYear()} Sistema de Gestión de Alumnos. Todos los
      derechos reservados.
    </Text>
  </Box>
);

export default Footer;
