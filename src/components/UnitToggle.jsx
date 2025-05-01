import { useUnitContext } from "../context/UnitContext";
import "./UnitToggle.css";

export function UnitToggle() {
  const { unit, toggleUnit } = useUnitContext();

  return (
    <button className="toggle-button" onClick={toggleUnit}>
      <span className={unit === "metric" ? "active" : ""}>°C</span>
      |
      <span className={unit === "imperial" ? "active" : ""}>°F</span>
    </button>
  );
}