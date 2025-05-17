import { useEffect, useState } from "react";
import { getTimePeriod } from "../utils/getTimePeriod"; // helper function below

export function useBrolly(weatherData) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  
  useEffect(() => {
    if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
      setLoading(false);
      setError("No weather data for brolly message.");
      return;
    }

    const id = weatherData.weather[0].id;
    const timestamp = weatherData.dt;
    const period = getTimePeriod(timestamp);

    const fetchMessage = async () => {
      setLoading(true);
      setError(null);
      setMessage(null); // Clear previous message
      try {
        const res = await fetch(`/api/getMessage?id=${id}&period=${period}`);
        if (!res.ok) throw new Error("Message not found");
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        //console.error(err);
        setError("No brolly message available.");
        setMessage("Best to have a look outside!"); // Fallback message
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, [weatherData]);

  return { message, loading, error };
}