import "./BrollyWeather.css";
import { getBrollyMessage } from "../hooks/useBrolly"
import { useWeatherContext } from "../context/WeatherContext";
import { Skeleton } from "../components/Loading";

function BrollyWeather() {
  const { current, loading, error } = useWeatherContext();

  if (loading) {
    return <Skeleton section="" blocks={2} margin="top"/>;
    //return <div className="answer"><p className="loading">Loading...</p></div>;
  }
  /*if (error) {
    return <div className="answer"><p className="error">Error: {error}</p></div>;
  }
  if (!current || !current.weather) {
    return <div className="answer"><p className="error">No weather data available</p></div>;
  }*/

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