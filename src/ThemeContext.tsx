import { createContext, ReactNode, useContext, useState } from "react";

export type Themes = "red" | "blue" | "default";

interface ThemeContextValues {
  currentTheme: Themes;
  toggleCurrentTheme: () => void;
}

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeContext = createContext<undefined | ThemeContextValues>(undefined);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Themes>("default");

  const toggleCurrentTheme = () =>
    setCurrentTheme((current) => {
      if (current === "red") {
        return "blue";
      }
      if (current === "blue") {
        return "default";
      }
      return "red";
    });

  const value = { currentTheme, toggleCurrentTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useThemeContext };
