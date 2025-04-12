import "./BrollyWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import { getBrollyMessage, getBrollyAdvice } from "../hooks/useBrolly";

function BrollyWeather({ data }){
  if(!data || !data.weather) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="brolly-weather">
      <h2>Will you need a brolly in {data.name}?</h2>
      <ErrorBoundary>
        <h3>{getBrollyAdvice(data)}</h3>
        <p>{getBrollyMessage(data)}</p>
      </ErrorBoundary>
    </div>
  );
}

export default BrollyWeather;
// This component is responsible for displaying the answer to the question Do you need a brolly today?