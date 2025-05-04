import { useMemo } from 'react';
import messages from '../data/brolly.json';

export function useBrolly(weatherData) {
  return useMemo(() => {
    // If there's no weather data yet (e.g., still loading), don't return anything
    if (!weatherData || !weatherData.weather || !weatherData.weather[0]) return "";

    const id = weatherData.weather[0].id; // Extract the weather condition ID (e.g., 800 = clear sky)
    const sunrise = weatherData.sys.sunrise; // Extract the sunrise time (in UNIX timestamp)
    const sunset = weatherData.sys.sunset; // Extract the sunset time (in UNIX timestamp)
    const now = weatherData.dt; // Get the current time (in UNIX timestamp)

    // Determine if it's currently daytime
    const isDaytime = now > sunrise && now < sunset;
    
    // Use the matching message set for this weather ID, or fallback to 'default'
    const messageSet = messages[id] || messages['default'];

    // Choose either the 'day' or 'night' message set
    const raw = isDaytime ? messageSet.day : messageSet.night;

    // If it's an array, pick a random message from the list
    if (Array.isArray(raw)) {
      const index = Math.floor(Math.random() * raw.length);
      return raw[index];
    }

    // If it's just a single message (not an array), return it directly
    return raw;
  }, [weatherData]); // Only recalculate when weatherData changes
}