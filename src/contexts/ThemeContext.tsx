import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, ThemeType } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme: ThemeType = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
