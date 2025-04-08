import "./ExpectedWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import { fetchExpectedWeather } from "../services/api";
import { useState, useEffect, use } from "react";
import Weather from "./Weather";

function ExpectedWeather() {
  const [weatherData, setWeatherData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Format the time string to display only hours and minutes
  const formatTime = (timeString) => {
    const date = new Date(timeString)
    const options = { hour: '2-digit', minute: '2-digit' }
    return date.toLocaleTimeString("en-GB", options)
  }

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchExpectedWeather()
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
  if (!weatherData || !weatherData.list || weatherData.list.length < 6) {
    return <div>No weather data available</div>
  }
  console.log(weatherData)

  return (
    <div className="expected-weather">
      <h2>Expected</h2>
      <ErrorBoundary>
      {weatherData.list.slice(1, 6).map((item, index) => (
        <Weather
          key={index}
          time={formatTime(item.dt_txt)}
          condition={item.main.temp}
          temperature={item.weather[0].main}
        />
      ))}
      </ErrorBoundary>
    </div>
  );
}

export default ExpectedWeather;
// This component is responsible for displaying the expected weather information