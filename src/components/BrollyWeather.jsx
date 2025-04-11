import "./BrollyWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import { getBrollyMessage, getBrollyAdvice } from "../hooks/useBrolly";

function BrollyWeather({ data }){
  if(!data || !data.weather) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="brolly-weather">
      <h2>{data.name}</h2>
      <ErrorBoundary>
        <h1>{getBrollyAdvice(data)}</h1>
        <p>{getBrollyMessage(data)}</p>
      </ErrorBoundary>
    </div>
  );
}

export default BrollyWeather;
// This component is responsible for displaying the answer to the question Do you need a brolly today?