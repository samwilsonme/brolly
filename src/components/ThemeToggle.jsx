import { useThemeContext } from '../context/ThemeContext';
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className="theme-toggle toggle-button" onClick={toggleTheme}>
      <span className={theme === "dark" ? "active" : ""}>Dark</span>
      <span className="toggle-divider">|</span>
      <span className={theme === "light" ? "active" : ""}>Light</span>
    </button>
  );
};