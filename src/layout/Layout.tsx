import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <Box minH="100vh" bg="white" color="black">
      <Header />
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}