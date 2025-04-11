import "./CurrentWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import Weather from "./Weather";

function CurrentWeather({ data }){
  if(!data || !data.weather) {
    return <div>No weather data available</div>;
  }

  return (
    <ErrorBoundary>
      <div className="current-weather">
        <h2>Currently</h2>
        <div className="details">
          <Weather
            condition={""} //can't delete because I an error on the component, but this element doesn't show on the designs 
            temperature={data.main.temp}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default CurrentWeather;
// This component is responsible for displaying the current weather information