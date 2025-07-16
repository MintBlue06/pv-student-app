import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import routesConfig from "./routes";
import { Box, Flex } from "@chakra-ui/react";

const AppRoutes = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1" p={4}>
        <main>
          <AppRoutes />
        </main>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
