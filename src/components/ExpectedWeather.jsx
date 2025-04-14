import "./ExpectedWeather.css";
import Weather from "./Weather";
import { useWeatherContext } from "../context/WeatherContext";

function ExpectedWeather() {
  const { forecast } = useWeatherContext();

  if (!forecast || !forecast.list || forecast.list.length < 5) {
    return <div>No forecast data available</div>;
  }

  // Check the forecast for wet weather and return message
  const nextBrolly = () => {
    for (const item of forecast.list) {
      const weatherCode = item.weather[0].id;
      const time = formatTime(item.dt_txt);
  
      if (weatherCode > 700 && weatherCode < 800) {
        return `Not looking great out there around ${time}. Take care!`;
      } else if (weatherCode > 800) {
        return `Might be unpleasant later around ${time}. Look out!`;
      } else if (weatherCode !== 800) {
        return `Wet weather expected around ${time}. Brolly time!`;
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
    <div className="expected-weather">
      <h3>{nextBrolly()}</h3>
      <div className="expected-list">
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
    </div>
  );
}

export default ExpectedWeather;