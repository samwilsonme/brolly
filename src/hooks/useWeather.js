import { useState, useEffect } from "react";

export function useWeather(lat, lon) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip fetching if lat/lon are not valid numbers
    if (typeof lat !== "number" || typeof lon !== "number") {
        // Optionally set an error or just wait for valid props
        setLoading(false);
        setError("Invalid latitude or longitude provided.");
        return;
    }

    const fetchWeatherFromBackend = async () => {
      setLoading(true);
      setError(null);
      setCurrent(null); // Clear previous data
      setForecast(null);

      // Simulate a delay to test loading state
      //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      //await delay(5000);

      try {
        // Construct the URL to your Vercel function
        // For local dev, Vite proxy handles this. For production, it's the same path.
        const apiUrl = `/api/getWeather?lat=${lat}&lon=${lon}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          // Try to parse error message from backend response
          let errorMessage = `Error: ${response.status} ${response.statusText}`;
          try {
            const errorData = await response.json();
            errorMessage = errorData?.error || errorMessage; // Use backend error if available
          } catch (e) {
            // Ignore if response is not JSON
          }
          throw new Error(errorMessage);
        }

        const data = await response.json();

        // Update state with data received from the serverless function
        setCurrent(data.current);
        setForecast(data.forecast);

      } catch (err) {
        console.error("Failed to fetch weather via backend:", err);
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherFromBackend();

    // Re-run the effect if latitude or longitude changes
  }, [lat, lon]);

  return { current, forecast, loading, error };
}