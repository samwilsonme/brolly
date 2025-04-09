import "./CurrentWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import Weather from "./Weather";

function CurrentWeather({ data }){
  if(!data || !data.weather) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="current-weather">
      <h2>Currently</h2>
      <ErrorBoundary>
        <Weather
          condition={data.weather[0].main}
          temperature={data.main.temp}
        />
      </ErrorBoundary>
    </div>
  );
}

export default CurrentWeather;
// This component is responsible for displaying the current weather information