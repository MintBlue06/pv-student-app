import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Icon,
  Input,
  VStack,
  Heading,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import { MdArrowBack, MdModeEdit, MdPersonAdd, MdSave } from "react-icons/md";

export const StudentForm = ({
  initialData = {},
  onSubmitForm,
  isEditMode = false,
  title,
}) => {
  const [formData, setFormData] = useState(() => ({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    teléfono: "",
    ...initialData,
  }));
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const formBg = useColorModeValue("white", "gray.700");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.lu?.trim()) newErrors.lu = "El LU es obligatorio.";
    if (!formData.nombre?.trim())
      newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.apellido?.trim())
      newErrors.apellido = "El apellido es obligatorio.";
    if (!formData.email?.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmitForm(formData);
    }
  };

  return (
    <Box bg={formBg} p={8} borderRadius="lg" shadow="md" maxW="lg" mx="auto">
      <VStack as="form" onSubmit={handleSubmit} spacing={4}>
        <Heading size="lg" mb={4}>
          <HStack>
            {isEditMode ? (
              <Icon as={MdModeEdit} mr={2} />
            ) : (
              <Icon as={MdPersonAdd} mr={2} />
            )}
            <Text>{title}</Text>
          </HStack>
        </Heading>
        <FormControl isInvalid={errors.lu}>
          <FormLabel htmlFor="lu">LU (Legajo Único)</FormLabel>
          <Input
            id="lu"
            name="lu"
            value={formData.lu || ""}
            onChange={handleChange}
            isDisabled={isEditMode}
          />
          <FormErrorMessage>{errors.lu}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.nombre}>
          <FormLabel htmlFor="nombre">Nombre</FormLabel>
          <Input
            id="nombre"
            name="nombre"
            value={formData.nombre || ""}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.nombre}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.apellido}>
          <FormLabel htmlFor="apellido">Apellido</FormLabel>
          <Input
            id="apellido"
            name="apellido"
            value={formData.apellido || ""}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.apellido}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="curso">Curso</FormLabel>
          <Input
            id="curso"
            name="curso"
            value={formData.curso || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="domicilio">Domicilio</FormLabel>
          <Input
            id="domicilio"
            name="domicilio"
            value={formData.domicilio || ""}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="teléfono">Teléfono</FormLabel>
          <Input
            id="teléfono"
            type="tel"
            name="teléfono"
            value={formData.teléfono || ""}
            onChange={handleChange}
          />
        </FormControl>
        <HStack w="100%" justifyContent="flex-end" mt={4}>
          <Button onClick={() => navigate("/alumnos")} variant="outline">
            <Icon
              as={MdArrowBack}
              boxSize={[5, 5, 6]}
              mr={[0, 0, 2]}
              verticalAlign="middle"
            />
            <Text display={["none", "none", "block"]}>Cancelar</Text>
          </Button>
          <Button type="submit" colorScheme="teal">
            <Icon
              as={MdSave}
              boxSize={[5, 5, 6]}
              mr={[0, 0, 2]}
              verticalAlign="middle"
            />
            <Text display={["none", "none", "block"]}>
              {isEditMode ? "Guardar Cambios" : "Agregar Alumno"}
            </Text>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
