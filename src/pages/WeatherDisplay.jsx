import { useSearchParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import BrollyWeather from "../components/BrollyWeather";
import CurrentWeather from "../components/CurrentWeather";
import ExpectedWeather from "../components/ExpectedWeather";
import './WeatherDisplay.css';

export function WeatherDisplay() {
  const [params] = useSearchParams();
  const location = params.get("location") || "Cambridge, UK";

  const { current, forecast, loading, error } = useWeather(location);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!current || !forecast ) return <div>No data available</div>;

  return (
    <div className="weather-display">
      <div className="logo">
        <h1>BROLLY LOGO</h1>
      </div>
      <div className='weather-container'>
        <BrollyWeather data={current} location={location}/>
        <div className="current-expected">
          <CurrentWeather data={current} location={location}/>
          <ExpectedWeather data={forecast} location={location}/>
        </div>
      </div>
    </div>
  );
}