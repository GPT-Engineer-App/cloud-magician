import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider, Box, VStack, FormControl, FormLabel, Input, Button, useToast, Heading } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("https://backengine-znib.fly.dev/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("accessToken", data.accessToken);
      toast({
        title: "Logged in successfully.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Failed to log in.",
        description: "Check your credentials and try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <VStack spacing={4} align="flex-start">
          <Heading as="h2" size="xl">
            Login
          </Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button rightIcon={<FaSignInAlt />} colorScheme="blue" onClick={handleLogin}>
            Sign In
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
