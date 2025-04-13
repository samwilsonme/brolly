import "./CurrentWeather.css"
import ErrorBoundary from "./ErrorBoundary"
import Weather from "./Weather"
import { useWeather } from "../hooks/useWeather"

function CurrentWeather({ data, location }) {
  const { current, loading, error } = useWeather(location) //using the shared hook 
  if(!current || !current.weather) {
    return <div>No weather data available</div>
  }
  
  return (
    <ErrorBoundary>
      <div className="current-weather">
        <h2>Currently</h2>
        <div className="details">
          <Weather
            condition={current.weather[0].main} 
            temperature={current.main.temp}
            icon={current.weather[0].icon}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default CurrentWeather
// This component is responsible for displaying the current weather information