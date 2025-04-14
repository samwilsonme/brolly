import "./CurrentWeather.css";
import Weather from "./Weather";
import { useWeatherContext } from "../context/WeatherContext";

function CurrentWeather() {
  const { current } = useWeatherContext(); // Access data from WeatherContext

  if (!current || !current.weather) {
    return <div>No weather data available</div>;
  }

  return (
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
  );
}

export default CurrentWeather;