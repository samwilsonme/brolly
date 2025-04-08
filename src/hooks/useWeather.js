import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiBase = "https://api.openweathermap.org/data/2.5";

export function useWeather(location = "Cambridge,UK") {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const currentRes = await fetch(
          `${apiBase}/weather?q=${location}&units=metric&appid=${apiKey}`
        );
        const forecastRes = await fetch(
          `${apiBase}/forecast?q=${location}&units=metric&appid=${apiKey}`
        );

        if (!currentRes.ok || !forecastRes.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        setCurrent(currentData);
        setForecast(forecastData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return { current, forecast, loading, error };
}
