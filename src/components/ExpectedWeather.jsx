import "./ExpectedWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import Weather from "./Weather";
import { useWeather } from "../hooks/useWeather";

function ExpectedWeather({ data }) {
  const { forecast, loading, error } = useWeather(); //using the shared hook 

  // Format the time string to display only hours and minutes
  // A: formatted time looks great
  const formatTime = (timeString) => {
    const date = new Date(timeString)
    const options = { hour: '2-digit', minute: '2-digit' }
    return date.toLocaleTimeString("en-GB", options)
  };

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>
  if(!forecast?.list || forecast.list.length < 6) return <div>No forecast data available</div>

  return (
    <div className="expected-weather">
      <h2>Expected</h2>
      <ErrorBoundary>
      {forecast.list.slice(1, 6).map((item, index) => (
        <Weather
          key={index}
          time={formatTime(item.dt_txt)}
          condition={item.weather[0].main}
          temperature={item.main.temp}

        />
      ))}
      </ErrorBoundary>
    </div>
  );
}

export default ExpectedWeather;
// This component is responsible for displaying the expected weather information