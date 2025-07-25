import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StudentProvider } from "./contexts/StudentContext";
import theme from "./theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <StudentProvider>
          <App />
        </StudentProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
