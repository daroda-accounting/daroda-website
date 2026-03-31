import { Box, Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { RouterLink } from "../components/RouterLink";


const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  return (
    <Box as="header" bg="white" borderBottom="1px solid" borderColor="gray.200">
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 10 }}
        py={{ base: 4, md: 6 }}
        align="center"
        justify="space-between"
        gap={6}
      >
        <RouterLink to="/">
          <Image
            src="/images/header-logo&name.png"
            alt="Daroda Accounting"
            h={{ base: "44px", md: "56px" }}
            objectFit="contain"
          />
        </RouterLink>

        <HStack as="nav" gap={10} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Box key={item.to}>
              <RouterLink to={item.to}>
                {({ isActive }) => (
                  <Box
                      px={6}
                      py={2}
                      fontSize="sm"
                      letterSpacing="0.08em"
                      textTransform="uppercase"
                      fontWeight="500"
                      bg={isActive ? "orange.600" : "transparent"}
                      color={isActive ? "white" : "black"}
                      _hover={{ bg: isActive ? "orange.600" : "blackAlpha.50" }}
                  >
                      {item.label}
                  </Box>
                )}
              </RouterLink>
            </Box>
          ))}
        </HStack>

        <VStack align="end" gap={3} display={{ base: "none", md: "flex" }}>
          <Button
            asChild
            variant="outline"
            borderRadius="0"
            borderColor="orange.600"
            color="orange.600"
            fontWeight="500"
            letterSpacing="0.08em"
            textTransform="uppercase"
            px={6}
            _hover={{ bg: "orange.50" }}
          >
            <a href="https://calendly.com/darodaaccounting/initialconsult" target="_blank" rel="noreferrer">
              HOW CAN I HELP? ›
            </a>
          </Button>

          <HStack gap={3} opacity={0.9}>
            {[
              { label: "Facebook", text: "f" },
              { label: "Instagram", text: "ig" },
              { label: "LinkedIn", text: "in" },
            ].map((icon) => (
              <Button
                key={icon.label}
                asChild
                aria-label={icon.label}
                variant="outline"
                minW="26px"
                w="26px"
                h="26px"
                borderRadius="full"
                borderColor="blackAlpha.300"
                px={0}
                _hover={{ bg: "blackAlpha.50" }}
              >
                <a href="#">
                  <Text fontSize="xs" fontWeight="600" color="black">
                    {icon.text}
                  </Text>
                </a>
              </Button>
            ))}
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}