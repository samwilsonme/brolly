import { createContext, useContext, useEffect, useState } from "react";

const UnitContext = createContext();

export function UnitProvider({ children }) {
  const [unit, setUnit] = useState(() => {
    return localStorage.getItem("unit") || "metric";
  });

  const toggleUnit = () => {
    setUnit((prevUnit) => {
      const newUnit = prevUnit === "metric" ? "imperial" : "metric";
      localStorage.setItem("unit", newUnit);
      return newUnit;
    });
  };

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
}

export function useUnitContext() {
  return useContext(UnitContext);
}