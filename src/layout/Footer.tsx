import { Box, Container, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" bg="#f3f3f3" mt={16} py={10}>
      <Container maxW="1280px">
        <Text fontSize="sm">© {new Date().getFullYear()} Daroda Accounting</Text>
      </Container>
    </Box>
  );
}