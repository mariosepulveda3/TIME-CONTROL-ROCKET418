/* import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Register = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Register</Heading>
        <Input placeholder="Username" type="text" variant="filled" mb={3} />
        <Input
          placeholder="xxx@rocket418.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          Register
        </Button>
      </Flex>
    </Flex>
  );
};

export default Register; */

//HE HECHO UN MIX CON LA ESTRUCTURA QUE ME HA PROPUESTO GPT + LOS ESTILOS QUE TENÍAMOS DESDE UN PRINCIPIO (YA LOS CAMBIAREMOS SI QUERÉIS)
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (password !== confirmPassword) {
      // Mostrar mensaje de error de que las contraseñas no son iguales
      setIsSubmitting(false);
    } else {
      // Enviar información al servidor para registrar al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex h="100vh" alignItems={"center"} justifyContent="center">
        <Flex
          flexDir={"column"}
          bg={formBackground}
          p={8}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading pb={6}>Registro</Heading>

          <FormControl isRequired>
            <FormLabel htmlFor="username">Nombre de usuario</FormLabel>
            <Input
              placeholder="Usuario"
              id="username"
              type="text"
              variant="filled"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              placeholder="email"
              id="email"
              type="email"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              placeholder="Contraseña"
              id="password"
              type="password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired mb={6}>
            <FormLabel htmlFor="confirmPassword">
              Confirmar contraseña
            </FormLabel>
            <Input
              placeholder="Repetir contraseña"
              id="confirmPassword"
              type="password"
              variant="filled"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" isLoading={isSubmitting}>
            Registrar
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}

export default SignupForm;
