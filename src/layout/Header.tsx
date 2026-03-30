import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import { RouterLink } from "../components/RouterLink";


const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  return (
    <Box as="header" bg="#f3f3f3" borderBottom="1px solid" borderColor="gray.200">
      <Flex
        maxW="1280px"
        mx="auto"
        px={6}
        py={6}
        align="center"
        justify="space-between"
        gap={6}
      >
        <RouterLink to="/">
          <Image
            src="/images/header-logo&name.png"
            alt="Daroda Accounting"
            h="56px"
            objectFit="contain"
          />
        </RouterLink>

        <HStack as="nav" gap={8} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Box key={item.to}>
              <RouterLink to={item.to}>
                {({ isActive }) => (
                  <Box
                      px={3}
                      py={1}
                      rounded="md"
                      fontWeight="600"
                      bg={isActive ? "blackAlpha.100" : "transparent"}
                      _hover={{ bg: "blackAlpha.100" }}
                  >
                      {item.label}
                  </Box>
                )}
              </RouterLink>
            </Box>
          ))}
        </HStack>
        <Button variant="outline" borderRadius="0">
          <a
            href="https://calendly.com/darodaaccounting/initialconsult"
            target="_blank"
            rel="noreferrer"
          >
            How Can I Help?
          </a>
        </Button>
      </Flex>
    </Box>
  );
}