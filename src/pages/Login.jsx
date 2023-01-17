/* import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const Login = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
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
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login; */

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Enviar información al servidor para iniciar sesión
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
          <Heading pb={6}>Inicio de sesión</Heading>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              variant={'filled'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              id="password"
              type="password"
              variant={'filled'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" isLoading={isSubmitting}>
            Iniciar sesión
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}

export default LoginForm;
