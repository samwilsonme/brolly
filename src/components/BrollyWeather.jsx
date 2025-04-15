import "./BrollyWeather.css";
import { getBrollyMessage } from "../hooks/useBrolly"
import { useWeatherContext } from "../context/WeatherContext";

function BrollyWeather() {
  const { current } = useWeatherContext();

  if (!current || !current.weather) {
    return <div>No weather data available</div>;
  }

  const getBrolly = () => {
    if (current.weather[0].id !== 800) {
      return "Yes";
    }
    if (current.weather[0].id > 800) {
      return "Maybe";
    }
    return "No";
  };

  return (
    <section className="answer">
      <h3>{getBrolly()}</h3>
      <p>{getBrollyMessage(current)}</p>
    </section>
  );
}

export default BrollyWeather;
// This component is responsible for displaying the answer to the question Do you need a brolly today?