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
      //await delay(10000);

      // Validate latitude and longitude
      if (typeof lat !== "number" || typeof lon !== "number") {
        setError("Invalid latitude or longitude provided.");
        setLoading(false);
        return;
      }

      // Build API URLs
      const apiUrlCurrent = `${apiBase}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      const apiUrlForecast = `${apiBase}/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=5&appid=${apiKey}`;

      try {
        // Fetch current and forecast weather in parallel
        const [currentRes, forecastRes] = await Promise.all([
          fetch(apiUrlCurrent),
          fetch(apiUrlForecast)
        ]);

        // Check if either response is not OK
        if (!currentRes.ok) {
          const errorData = await currentRes.json();
          throw new Error(errorData?.message || "Failed to fetch current weather data.");
        }
        if (!forecastRes.ok) {
          const errorData = await forecastRes.json();
          throw new Error(errorData?.message || "Failed to fetch forecast data.");
        }

        // Parse JSON responses
        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        // Update state with fetched data
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
