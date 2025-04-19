import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cityData from '../data/uk_locations.min.json'; // Import the local JSON file

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiBase = "https://api.openweathermap.org/data/2.5";

export function useWeather(selectedLocation) {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = `${selectedLocation},GB` || "Cambridge,GB"; // Default to Cambridge,GB if no location is provided

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      // Simulate a delay to test loading state
      //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      //await delay(3000);
      
      try {
        const currentRes = await fetch(
          `${apiBase}/weather?q=${location}&units=metric&appid=${apiKey}`
        );
        const forecastRes = await fetch(
          `${apiBase}/forecast?q=${location}&units=metric&cnt=5&appid=${apiKey}` // added cnt=5 to limit results
        );
        
        if (!currentRes.ok || !forecastRes.ok) {
          // Check if the location exists
          //console.log(selectedLocation);
          const cityExists = cityData.some((city) => {
            const searchableName = (city.name_2 && city.name_2.trim() !== "") ? city.name_2 : city.name_1;
            return searchableName.toLowerCase() === selectedLocation.toLowerCase(); // Use selectedLocation instead of searchTerm
          });
          
          if (!cityExists) {
            console.log("City does not exist.");
            navigate(`/?error=city&location=${encodeURIComponent(selectedLocation.trim())}`);
          }

          throw new Error("Failed to fetch weather data");
        }

        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();

        setCurrent(currentData);
        setForecast(forecastData);

        //console.log("Current Weather Data:", currentData);
        //console.log("Forecast Weather Data:", forecastData);
        console.log("Location:", location);

      } catch (err) {
        setError(err.message);
        console.log("Error fetching weather data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return { current, forecast, loading, error };
}
