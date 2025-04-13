import "./BrollyWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import { getBrollyMessage } from "../hooks/useBrolly"
import { useWeather } from "../hooks/useWeather"

function BrollyWeather({ data, location }) {
  const { current, loading, error } = useWeather(location) //using the shared hook 
  if(!current || !current.weather) {
    return <div>No weather data available</div>
  }

  const getBrolly = () => {
    if (current.weather[0].id !== 800) {
      return "Yes"
    }
    if (current.weather[0].id > 800) {
      return "Maybe"
    }
    return "No"
  };

  return (
    <div className="brolly-weather">
      <h2>
        <span className="brolly-question">Will you need a brolly in </span>
        {current.name}?
      </h2>
      <ErrorBoundary>
        <h3>{getBrolly()}</h3>
        <p>{getBrollyMessage(current)}</p>
      </ErrorBoundary>
    </div>
  );
}

export default BrollyWeather
// This component is responsible for displaying the answer to the question Do you need a brolly today?