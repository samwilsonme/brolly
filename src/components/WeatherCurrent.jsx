import { useWeatherContext } from "../context/WeatherContext";

import WeatherItem from "./WeatherItem";
import { Skeleton } from "./Loading";

function WeatherCurrent() {
  const { current, loading, error } = useWeatherContext(); // Access data from WeatherContext
  /*
  // Show loading skeleton while fetching data
  if (loading) {
    return <Skeleton section="current" blocks={2} type="row" />;
  }

  // Error handling if there's an issue fetching the weather data
  if (error) {
    throw new Error(error);
  }
  
  // If current weather data is unavailable
  if (!current || !current.weather) {
    throw new Error("Weather data incomplete.");
  }
  */
  
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