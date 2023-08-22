import { useThemeContext } from "../ThemeContext";

export default () => {
  const { toggleCurrentTheme } = useThemeContext();
  return <button onClick={toggleCurrentTheme}>Cycle Theme</button>;
};
