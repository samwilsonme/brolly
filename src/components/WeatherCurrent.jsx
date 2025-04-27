import { useWeatherContext } from "../context/WeatherContext";

import WeatherItem from "./WeatherItem";
import { Skeleton } from "./Loading";

function WeatherCurrent() {
  const { current, loading, error } = useWeatherContext(); // Access data from WeatherContext

  // Show loading skeleton while fetching data
  if (loading) {
    return <Skeleton section="current" blocks={2} type="row" />;
  }

  // Error handling if there's an issue with fetching the weather data
  if (error) {
    return <div className="current"><p className="error">Error: {error}</p></div>;
  }

  // If current data is not available
  if (!current || !current.weather) {
    return <div className="current"><p className="error">No weather data available</p></div>;
  }

  return (
    <section className="current">
      <h2>Currently</h2>
      <WeatherItem
        condition={current.weather[0].main}
        temperature={current.main.temp}
        icon={current.weather[0].icon}
      />
    </section>
  );
}

export default WeatherCurrent;