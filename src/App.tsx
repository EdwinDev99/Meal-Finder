import { ChakraProvider, Box, Heading, Button } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box p={6} textAlign="center">
        <Heading mb={4}>¡Hola desde Chakra UI! 🎉</Heading>
        <Button colorScheme="teal">Haz clic aquí</Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
