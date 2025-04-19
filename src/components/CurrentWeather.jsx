import "./CurrentWeather.css";
import Weather from "./Weather";
import { useWeatherContext } from "../context/WeatherContext";
import { Skeleton } from "../components/Loading";

function CurrentWeather() {
  const { current, loading, error  } = useWeatherContext(); // Access data from WeatherContext

  if (loading) {
    return <Skeleton section="current" blocks={2} type="row" />;
    //return <div className="current"><p className="loading">Loading...</p></div>;
  }
  /*if (error) {
    return <div className="current"><p className="error">Error: {error}</p></div>;
  }
  if (!current || !current.weather) {
    return <div className="current"><p className="error">No weather data available</p></div>;
  }*/

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