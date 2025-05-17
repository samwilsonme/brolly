import { useBrolly } from "../hooks/useBrollyAPI"; // uses MongoDB via API
//import { useBrolly } from "../hooks/useBrolly"; // uses local JSON

import { useWeatherContext } from "../context/WeatherContext";
import { toast } from "sonner";

import { Skeleton } from "./Loading";

function WeatherBrolly() {
  const { current, loading, error, name } = useWeatherContext(); // Access data from WeatherContext
  const brolly = useBrolly(current);

  /*
  // Show loading skeleton while data is being fetched
  if (loading) {
    return <Skeleton blocks={3} />;
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
  
  // Logic to determine if an umbrella is needed based on weather conditions
  const getBrolly = () => {
    const weatherCode = current.weather[0].id;

    if (weatherCode > 800) {
      return "Maybe"; // Cloudy or atmospheric conditions
    }
    if (weatherCode !== 800) {
      return "Yes"; // Rainy or stormy weather
    }
    return "No"; // Clear weather
  };

  if (name && name !== current.name) {
    //toast.info(`Showing weather data for ${current.name}`);
    toast.message('Showing local data:', {
      description: `${current.name} weather station`,
      duration: 8000,
    })
  }

  return (
    <section>
      <div className="question">
        <p>Do you need an umbrella in </p>
        <h2>{name ? name : current.name}?</h2>
      </div>
      <h3>{getBrolly()}</h3>
      <p>{brolly.message === null ? 'Thinking...' : brolly.message}</p>
    </section>
  );
}

export default WeatherBrolly;