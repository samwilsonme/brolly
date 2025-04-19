import { useWeatherContext } from "../context/WeatherContext";
import Boundary from "./Boundary";
import ErrorBoundary from "./ErrorBoundary";
import Weather from "./Weather";
import { Skeleton } from "../components/Loading";

function ExpectedWeather() {
  const { forecast, loading, error } = useWeatherContext();

  if (loading) {
    return <Skeleton section="expected" blocks={5} type="row"/>;
    //return <div className="location"><p className="loading">Loading...</p></div>;
  }
  /*if (error) {
    return <div className="expected"><p className="error">Error: {error}</p></div>;
  }
  if (!forecast || !forecast.list || forecast.list.length < 5) {
    return <div className="expected"><p className="error">No weather data available</p></div>;
  }*/

  // Check the forecast for wet weather and return message
  const nextBrolly = () => {
    for (const item of forecast.list) {
      const weatherCode = item.weather[0].id;
      const time = formatTime(item.dt_txt);
  
      if (weatherCode > 700 && weatherCode < 800) {
        return `Not looking great around ${time}`;
      } else if (weatherCode > 800) {
        return `Might be unpleasant around ${time}`;
      } else if (weatherCode !== 800) {
        return `Wet weather expected around ${time}`;
      }
    }
    return "Looking good up there! Enjoy!";
  };

  // Format the time string to display only hours and minutes
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <section className="expected">
        <h3>{nextBrolly()}</h3>
        <div className="list">
          {forecast.list.slice(0, 5).map((item, index) => (
            <Weather
              key={index}
              condition={item.weather[0].main}
              temperature={item.main.temp}
              icon={item.weather[0].icon}
              time={formatTime(item.dt_txt)}
            />
          ))}
        </div>
    </section>
  );
}

export default ExpectedWeather;