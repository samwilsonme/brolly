import "./CurrentWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import Weather from "./Weather";

function CurrentWeather({ data }){
  if(!data || !data.weather) {
    return <div>No weather data available</div>;
  }

  // Check time to get part of day - This matches item.sys.pod (part of day) in ExpectedWeather
  const getPod = () => {
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const now = data.dt;
    return now > sunrise && now < sunset ? 'd' : 'n'; // returns 'd' for day and 'n' for night
  }

  return (
    <ErrorBoundary>
      <div className="current-weather">
        <h2>Currently</h2>
        <div className="details">
          <Weather
            condition={data.weather[0].main} 
            temperature={data.main.temp}
            pod={getPod()}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default CurrentWeather;
// This component is responsible for displaying the current weather information