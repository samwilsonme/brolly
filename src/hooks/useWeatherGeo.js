import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiBase = "https://api.openweathermap.org/data/2.5";

export function useWeather(lat, lon) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      if (typeof lat !== 'number' || typeof lon !== 'number') {
        setError("Invalid latitude or longitude provided.");
        setLoading(false);
        return;
      }

      const apiUrlCurrent = `${apiBase}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const apiUrlForecast = `${apiBase}/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=5&appid=${apiKey}`;

      try {
        const currentRes = await fetch(apiUrlCurrent);
        const forecastRes = await fetch(apiUrlForecast);

        if (!currentRes.ok || !forecastRes.ok) {
          const errorData = await currentRes.json(); // Try to get more specific error info
          const errorMessage = errorData?.message || "Failed to fetch weather data";
          throw new Error(errorMessage);
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        setCurrent(currentData);
        setForecast(forecastData);

        console.log("Weather data fetched for:", `${lat},${lon}`);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching weather data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { current, forecast, loading, error };
}