import { useSearchParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { WeatherProvider } from "../context/WeatherContext";
import BrollyWeather from "../components/BrollyWeather";
import CurrentWeather from "../components/CurrentWeather";
import ExpectedWeather from "../components/ExpectedWeather";
import SearchBar from "../components/SearchBar";
import "./LandingSearch.css";
import './WeatherDisplay.css';

export function WeatherDisplay() {
  const [params] = useSearchParams();
  const location = params.get("location") || "Cambridge, UK";

// Fetch weather data once
  const { current, forecast, loading, error } = useWeather(location);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!current || !forecast) return <div>No data available</div>;

  return (
    <WeatherProvider value={{ current, forecast, location }}>
      <div className="weather-display">
        <div className="weather-header">
          <div className="logo">
            <h1>BROLLY LOGO</h1>
          </div>
          <SearchBar />
        </div>
        <div className="weather-container">
          <BrollyWeather />
          <div className="current-expected">
            <CurrentWeather />
            <ExpectedWeather />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}