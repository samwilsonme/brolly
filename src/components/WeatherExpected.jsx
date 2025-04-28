import { useWeatherContext } from "../context/WeatherContext";

import WeatherItem from "./WeatherItem";
import { Skeleton } from "./Loading";

function WeatherExpected() {
  const { forecast, loading, error } = useWeatherContext(); // Access data from WeatherContext
  /*
  // Show loading skeleton while fetching data
  if (loading) {
    return <Skeleton section="expected" blocks={5} type="row" />;
  }

  // Error handling if there's an issue with fetching the weather data
  if (error) {
    throw new Error(error);
  }

  // If forecast data is not available
  if (!forecast || !forecast.list || forecast.list.length < 5) {
    throw new Error("Weather data incomplete.");
  }
  */
  
  // Check the forecast for wet weather and return a message
  const nextBrolly = () => {
    let needBrollyMessage = null;

    for (const item of forecast.list) {
      const weatherCode = item.weather[0].id;
      const time = formatTime(item.dt_txt);

      // Wet weather (rain or snow)
      if (weatherCode >= 200 && weatherCode < 700) {
        needBrollyMessage = `Wet weather expected around ${time}`;
        break;
      }

      // Atmospheric conditions (fog, mist, etc.)
      if (weatherCode > 700 && weatherCode < 800 && !needBrollyMessage) {
        needBrollyMessage = `Not looking great around ${time}`;
      }

      // Cloudy conditions
      if (weatherCode > 800 && !needBrollyMessage) {
        needBrollyMessage = `Might be unpleasant around ${time}`;
      }
    }

    return needBrollyMessage || "Looking good up there! Enjoy!";
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
          <WeatherItem
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

export default WeatherExpected;