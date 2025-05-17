import { useEffect, useState } from "react";
import messages from "../data/brolly.min.json";
import { getTimePeriod } from "../utils/getTimePeriod";

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

    const fetchMessage = () => {
      setLoading(true);
      setError(null);
      setMessage(null);

      try {
        // Find the weather condition entry for the current weather ID
        const weatherEntry = messages.find(entry => entry.weatherId === id);

        if (!weatherEntry) {
          throw new Error("No matching weather ID found.");
        }

        // Find the message set for the corresponding period
        const messageSet = weatherEntry.messages.find(entry => entry.period === period) || 
                           weatherEntry.messages.find(entry => entry.period === "any");

        if (!messageSet) {
          throw new Error("No matching period found.");
        }

        // Randomly pick a message from the set
        const rawMessages = messageSet.messages;
        const index = Math.floor(Math.random() * rawMessages.length);
        setMessage(rawMessages[index]);
      } catch (err) {
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