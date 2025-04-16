import "./CurrentWeather.css";
import Weather from "./Weather";
import { useWeatherContext } from "../context/WeatherContext";

function CurrentWeather() {
  const { current } = useWeatherContext(); // Access data from WeatherContext

  if (!current || !current.weather) {
    return <div>No weather data available</div>;
  }

  return (
    <section className="current">
      <h2>Currently</h2>
      <Weather
        condition={current.weather[0].main}
        temperature={current.main.temp}
        icon={current.weather[0].icon}
      />
    </section>
  );
}

export default CurrentWeather;