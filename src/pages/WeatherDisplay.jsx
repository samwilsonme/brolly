import { useSearchParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import { WeatherProvider } from "../context/WeatherContext";
//import { Loading } from "../components/Loading";
import LocationSection from "../components/LocationSection";
import BrollyWeather from "../components/BrollyWeather";
import CurrentWeather from "../components/CurrentWeather";
import ExpectedWeather from "../components/ExpectedWeather";
import ErrorBoundary from "../components/ErrorBoundary";

import "./LandingSearch.css";
import './WeatherDisplay.css';
import logo from '../assets/logo/brolly.svg'
import search from '../assets/icons/search.svg'

export function WeatherDisplay() {
  const [params] = useSearchParams();
  const location = params.get("location") || "Cambridge, UK";

// Fetch weather data once
  const { current, forecast, loading, error } = useWeather(location);

  /*if (loading) {
    return Loading("weather-page");
    //return <div className="weather-page"><p className="loading">Loading...</p></div>;
  }*/
  /*if (error) {
    return <div className="weather-page"><p className="error">Error: {error}</p></div>;
  }
  if (!forecast || !forecast.list || forecast.list.length < 5) {
    return <div className="weather-page"><p className="error">No data available</p></div>;
  }*/

  return (
    <ErrorBoundary>
      <WeatherProvider value={{ current, forecast, loading, error, location }}>
        <main className="weather-page">
          <header>
            <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
            <img src={logo} alt="brolly" />
            <a href="/" className="search">
              <img src={search} alt="Search" />
            </a>
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
    </ErrorBoundary>
  );
}