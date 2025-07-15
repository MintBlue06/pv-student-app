import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1" p={4}>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
