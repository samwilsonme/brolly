import "./BrollyWeather.css";
import ErrorBoundary from "./ErrorBoundary"

function BrollyWeather({ data }){
  if(!data || !data.weather) {
    return <div>No weather data available</div>;
  }
  //console.log(data);

  return (
    <div className="brolly-weather">
      <h2>{data.name}</h2>
      <ErrorBoundary>
        <h1>YES/NO</h1>
        <p>{data.weather[0].description}</p>
      </ErrorBoundary>
    </div>
  );
}

export default BrollyWeather;
// This component is responsible for displaying the answer to the question Do you need a brolly today?