import { useUnitContext } from "../context/UnitContext";
import "./UnitToggle.css";

export const UnitToggle = () => {
  const { unit, toggleUnit } = useUnitContext();

  /*return (
    <button className="unit-toggle toggle-button" onClick={toggleUnit}>
      <span className={unit === "metric" ? "active" : ""}>°C</span>
      <span className="toggle-divider">|</span>
      <span className={unit === "imperial" ? "active" : ""}>°F</span>
    </button>
  );*/
  /*return (
    <button className="unit-toggle toggle-button" onClick={toggleUnit}>
      <span className={unit === "metric" ? "active" : ""}>°C</span>
      <span className={unit === "imperial" ? "active" : ""}>°F</span>
    </button>
  );*/
  return (
    <button className={`unit-toggle toggle-button ${unit === "metric" ? "metric-active" : "imperial-active"}`} onClick={toggleUnit} >
      <span className={unit === "metric" ? "active" : ""}>°C</span>
      <span className={unit === "imperial" ? "active" : ""}>°F</span>
    </button>
  )
}