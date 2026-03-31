import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { RouterLink } from "../components/RouterLink";

export function Footer() {
  return (
    <Box as="footer" bg="pink.100" mt={0} py={{ base: 10, md: 14 }}>
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 10 }}
        align={{ base: "start", md: "center" }}
        justify="space-between"
        gap={8}
        direction={{ base: "column", md: "row" }}
      >
        <Box textAlign="left">
          <Text fontWeight="600" color="black">
            Daroda Accounting, LLC
          </Text>
          <Text fontSize="xs" letterSpacing="0.18em" mt={2} color="blackAlpha.700">
            SITE CREDIT
          </Text>
        </Box>

        <Flex gap={6} align="center" wrap="wrap">
          <Button
            asChild
            variant="outline"
            borderRadius="0"
            borderColor="red.500"
            color="black"
            bg="transparent"
            px={8}
            _hover={{ bg: "whiteAlpha.700" }}
          >
            <RouterLink to="/terms-of-service">Terms of Service</RouterLink>
          </Button>
          <Button
            asChild
            variant="outline"
            borderRadius="0"
            borderColor="red.500"
            color="black"
            bg="transparent"
            px={8}
            _hover={{ bg: "whiteAlpha.700" }}
          >
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}