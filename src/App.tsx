import { ThemeProvider } from "./ThemeContext";

import CycleTheme from "./components/CycleTheme";
import ThemeableComponents from "./components/ThemeableComponents";

export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeableComponents.Header />
        <ThemeableComponents.Body />
        <ThemeableComponents.Footer>
          <p>Children</p>
        </ThemeableComponents.Footer>
        <CycleTheme />
      </div>
    </ThemeProvider>
  );
}
