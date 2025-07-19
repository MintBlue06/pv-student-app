import { useColorMode, IconButton } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <MdLightMode /> : <MdDarkMode />}
      onClick={toggleColorMode}
    />
  );
};
