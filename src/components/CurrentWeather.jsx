import "./CurrentWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import { fetchCurrentWeather } from "../services/api";
import { useState, useEffect, use } from "react";
import Weather from "./Weather";

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchCurrentWeather()
        setWeatherData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getWeather()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (!weatherData || weatherData.length === 0) {
    return <div>No weather data available</div>
  }
  console.log(weatherData)

  return (
    <div className="current-weather">
      <h2>Currently</h2>
      <ErrorBoundary>
        <Weather condition={weatherData.weather[0].main} temperature={weatherData.main.temp} />
      </ErrorBoundary>
    </div>
  );
}

export default CurrentWeather;
// This component is responsible for displaying the current weather information