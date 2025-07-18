import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Spacer,
  Text,
  Button,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import {
  MdHome,
  MdMenu,
  MdMenuBook,
  MdMenuOpen,
  MdPerson,
  MdPersonAdd,
} from "react-icons/md";

export const NavBar = () => {
  // useDisclosure maneja isOpen, onOpen, onClose para el menú
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" p={4} color="white" shadow="md">
      <Flex maxW="container.xl" mx="auto" align="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">
            Gestión Alumnos
          </Link>
        </Heading>

        <Spacer />

        <Box display={["none", "none", "flex"]} alignItems="center">
          <Button
            as={RouterLink}
            to="/"
            variant="ghost"
            mr={2}
            _hover={{ bg: "teal.600" }}
            alignItems="center"
          >
            <Icon as={MdHome} boxSize={[5, 5, 6]} mr={2} />
            <Text>Inicio</Text>
          </Button>
          <Button
            as={RouterLink}
            to="/alumnos"
            variant="ghost"
            mr={2}
            _hover={{ bg: "teal.600" }}
            alignItems="center"
          >
            <Icon as={MdPerson} boxSize={[5, 5, 6]} mr={2} />
            <Text>Alumnos</Text>
          </Button>
          <Button
            as={RouterLink}
            to="/alumnos/nuevo"
            variant="ghost"
            mr={2}
            _hover={{ bg: "teal.600" }}
            alignItems="center"
          >
            <Icon as={MdPersonAdd} boxSize={[5, 5, 6]} mr={2} />
            <Text>Nuevo</Text>
          </Button>
          <Button
            as={RouterLink}
            to="/acerca-de"
            variant="ghost"
            mr={4}
            _hover={{ bg: "teal.600" }}
          >
            Acerca de
          </Button>
        </Box>

        <ThemeToggleButton />

        {/* Menú - Visible solo en pantallas pequeñas */}
        <Box ml={4} display={["block", "block", "none"]}>
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              as={IconButton}
              aria-label="Opciones"
              icon={isOpen ? <MdMenuOpen /> : <MdMenu />} // Cambia el icono según el estado
              variant="ghost"
              onClick={isOpen ? onClose : onOpen} // Controla el estado del menú
              _hover={{ bg: "teal.600" }}
            />
            <MenuList bg="teal.500" borderColor="teal.600">
              <MenuItem
                as={RouterLink}
                to="/"
                onClick={onClose}
                bg="teal.500"
                _hover={{ bg: "teal.600" }}
              >
                <Icon as={MdHome} mr={2} />
                Inicio
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/alumnos"
                onClick={onClose}
                bg="teal.500"
                _hover={{ bg: "teal.600" }}
              >
                <Icon as={MdPerson} mr={2} />
                Alumnos
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/alumnos/nuevo"
                onClick={onClose}
                bg="teal.500"
                _hover={{ bg: "teal.600" }}
              >
                <Icon as={MdPersonAdd} mr={2} />
                Nuevo
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/acerca-de"
                onClick={onClose}
                bg="teal.500"
                _hover={{ bg: "teal.600" }}
              >
                <Icon as={MdMenuBook} mr={2} />
                Acerca de
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};
