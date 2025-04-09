import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiBase = "http://api.openweathermap.org/geo/1.0/direct";

export function useLocation(search, delay = 300) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeoutId;

    const fetchLocation = async () => {
      setLoading(true);
      setError(null);
      try {
        const locationRes = await fetch(
          `${apiBase}?q=${search}&limit=5&appid=${apiKey}`
        );

        if (!locationRes.ok) {
          throw new Error(`Failed to fetch location data: ${locationRes.status}`);
        }

        const locationData = await locationRes.json();

        if (locationData.length === 0) {
          setError("No matching locations found.");
          setLocation(null);
        } else {
          setLocation(locationData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if search term has at least 3 characters
    if (search && search.trim().length >= 3) {
      timeoutId = setTimeout(fetchLocation, delay);
    } else {
      setLocation(null);
      setLoading(false);
      setError(null);
      clearTimeout(timeoutId); // Clear any pending timeout
    }

    return () => {
      clearTimeout(timeoutId); // Cleanup on unmount or when search changes
    };
  }, [search, delay]);

  return { location, loading, error };
}
// This hook is responsible for fetching location data based on the search term
// It uses the OpenWeatherMap API to get location suggestions

// I don't like that there is no fuzzy search possible with this API
// I also don't like how this API returns London,GB it should be London,UK
// I think you can search by London,Uk so maybe it's something we can change
// But beacuse of the fuzzy search I think I might look as using a different API
