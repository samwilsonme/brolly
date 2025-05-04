import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiBase = "https://api.openweathermap.org/data/2.5";

export function useWeather(lat, lon) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      // Simulate a delay to test loading state
      //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      //await delay(5000);
      
      try {
        if (typeof lat !== "number" || typeof lon !== "number") {
          throw new Error("Invalid latitude or longitude provided.");
        }

        const res = await fetch(`/weather?lat=${lat}&lon=${lon}`);
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data?.error || "Failed to fetch weather.");
        }

        const { current, forecast } = await res.json();
        setCurrent(current);
        setForecast(forecast);
      } catch (err) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { current, forecast, loading, error };
}