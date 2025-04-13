import "./ExpectedWeather.css"
import ErrorBoundary from "./ErrorBoundary"
import Weather from "./Weather"
import { useWeather } from "../hooks/useWeather"

function ExpectedWeather({ data }) {
  const { forecast, loading, error } = useWeather() //using the shared hook 

  // Format the time string to display only hours and minutes
  const formatTime = (timeString) => {
    const date = new Date(timeString)
    const options = { hour: '2-digit', minute: '2-digit' }
    return date.toLocaleTimeString("en-GB", options)
  };

  // Check the forecast for wet weather and return message
  const nextBrolly = () => {
    for (const item of forecast.list) {
      const weatherCode = item.weather[0].id
      const time = formatTime(item.dt_txt)

      if (weatherCode !== 800) {
        return `Wet weather expected around ${time}. Brolly time!`
      }
      if (weatherCode > 800) {
        return `Might be wet later around ${time}. Look out!`
      }
    }

    return "Looking good up there! Enjoy!"
  };

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>
  if(!forecast?.list || forecast.list.length < 5) return <div>No forecast data available</div>

  return (
    <div className="expected-weather">
      <h3>{nextBrolly()}</h3>
      <ErrorBoundary>
      {forecast.list.slice(0, 5).map((item, index) => (
        <Weather
          key={index}
          time={formatTime(item.dt_txt)}
          condition={item.weather[0].main}
          temperature={item.main.temp}
          icon={item.weather[0].icon}
        />
      ))}
      </ErrorBoundary>
    </div>
  );
}

export default ExpectedWeather
// This component is responsible for displaying the expected weather information