import React from "react";
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

export default Register;
