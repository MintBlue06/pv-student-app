import { extendTheme } from "@chakra-ui/react";

const config = {
  /**initialColorMode: 'light',
  useSystemColorMode: false,*/
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
