import { useSearchParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { WeatherProvider } from "../context/WeatherContext";
import LocationSection from "../components/LocationSection";
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
      <main className="weather-page">
        <header>
          <h1>BROLLY LOGO</h1>
          <SearchBar />
        </header>
        <div className="content">
          <article className="brolly">
            <LocationSection />
            <BrollyWeather />
          </article>
          <aside className="weather">
            <CurrentWeather />
            <ExpectedWeather />
          </aside>
        </div>
      </main>
    </WeatherProvider>
  );
}