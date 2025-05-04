import { useThemeContext } from '../context/ThemeContext';
import SVGdark from '../assets/icons/light/01n.svg?react'; // SVG icon for dark mode - Clear night from light incons
import SVGlight from '../assets/icons/dark/01d.svg?react'; // SVG icon for light mode - Clear day from dark incons
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  /*return (
    <button className="theme-toggle toggle-button" onClick={toggleTheme}>
      <span className={theme === "dark" ? "active" : ""}>Dark</span>
      <span className="toggle-divider">|</span>
      <span className={theme === "light" ? "active" : ""}>Light</span>
    </button>
  );*/
  return (
    <button className={`theme-toggle toggle-button ${theme === "dark" ? "dark-active" : "light-active"}`} onClick={toggleTheme} >
      <span className={theme === "dark" ? "active" : ""}><SVGdark /></span>
      <span className={theme === "light" ? "active" : ""}><SVGlight /></span>
    </button>
  )
};