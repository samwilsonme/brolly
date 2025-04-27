import { getBrollyMessage } from "../hooks/useBrolly";
import { useWeatherContext } from "../context/WeatherContext";

import { Skeleton } from "./Loading";

function WeatherBrolly() {
  const { current, loading, error } = useWeatherContext(); // Access data from WeatherContext

  // Show loading skeleton while data is being fetched
  if (loading) {
    return <Skeleton section="brolly" blocks={3} />;
  }

  // Error handling if there's an issue fetching the weather data
  if (error) {
    return <div className="answer"><p className="error">Error: {error}</p></div>;
  }

  // If current weather data is unavailable
  if (!current || !current.weather) {
    return <div className="answer"><p className="error">No weather data available</p></div>;
  }

  // Logic to determine if an umbrella is needed based on weather conditions
  const getBrolly = () => {
    const weatherCode = current.weather[0].id;

    if (weatherCode !== 800) {
      return "Yes"; // Rainy or stormy weather
    }
    if (weatherCode > 800) {
      return "Maybe"; // Cloudy or atmospheric conditions
    }
    return "No"; // Clear weather
  };

  return (
    <section>
      <div className="question">
        <p>Do you need an umbrella in </p>
        <h2>{current.name}?</h2>
      </div>
      <h3>{getBrolly()}</h3>
      <p>{getBrollyMessage(current)}</p>
    </section>
  );
}

export default WeatherBrolly;