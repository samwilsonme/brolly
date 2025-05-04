import { createContext, useContext } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ value, children }) {
  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}