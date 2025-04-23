import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeatherGeo";
import { WeatherProvider } from "../context/WeatherContext";
import LocationSection from "../components/LocationSection";
import BrollyWeather from "../components/BrollyWeather";
import CurrentWeather from "../components/CurrentWeather";
import ExpectedWeather from "../components/ExpectedWeather";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBar from "../components/SearchBarGeo";
import Modal from "../components/Modal";

import "./LandingSearch.css";
import './WeatherDisplay.css';
import logo from '../assets/logo/brolly.svg';
import search from '../assets/icons/search.svg';
import useGeoLocation from "../hooks/useGeoLocation";

export function WeatherDisplay() {
  const [modal, setModal] = useState(false);
  const [params] = useSearchParams();
  const queryLat = params.get("lat");
  const queryLon = params.get("lon");
  const { latitude: geoLat, longitude: geoLon, error: geoError } = useGeoLocation();
  const [location, setLocation] = useState(null);
  const [isLoadingGeo, setIsLoadingGeo] = useState(true);

  // Determine latitude and longitude to use for fetching weather
  const finalLat = queryLat ? parseFloat(queryLat) : geoLat;
  const finalLon = queryLon ? parseFloat(queryLon) : geoLon;

  useEffect(() => {
    if (queryLat && queryLon) {
      setLocation(`${parseFloat(queryLat).toFixed(2)},${parseFloat(queryLon).toFixed(2)}`);
    } else if (geoLat && geoLon) {
      setLocation(`${geoLat.toFixed(2)},${geoLon.toFixed(2)}`);
    } else {
      setLocation("Cambourne, UK"); // Default if no data or params
    }
  }, [queryLat, queryLon, geoLat, geoLon]);

  useEffect(() => {
    if (geoLat || geoError) {
      setIsLoadingGeo(false);
    }
  }, [geoLat, geoError]);

  // Fetch weather data using the determined latitude and longitude
  const { current, forecast, loading: isWeatherLoading, error: weatherError } = useWeather(finalLat, finalLon);

  // Combine errors for UI display if needed
  const combinedError = geoError || weatherError;
  const isLoading = isLoadingGeo || isWeatherLoading;

  if (isLoading) {
    return (
      <div className="weather-page">
        <p className="loading">Loading weather data...</p>
      </div>
    );
  }

  if (combinedError) {
    return (
      <div className="weather-page">
        <p className="error">Error: {combinedError}</p>
        {geoError && <p className="error">Could not get your current location.</p>}
        {weatherError && <p className="error">Could not load weather data.</p>}
      </div>
    );
  }

  if (!forecast || !forecast.list || forecast.list.length < 5) {
    return (
      <div className="weather-page">
        <p className="error">No weather data available for {location}.</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <WeatherProvider value={{ current, forecast, loading: isLoading, error: combinedError, location }}>
        <main className="weather-page">
          <header>
            <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
            <img src={logo} alt="brolly" />
            <a className="search" onClick={() => setModal(true)}>
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
        {modal && (
          <Modal modal={setModal} style="modal-page search-page">
            <SearchBar />
          </Modal>
        )}
      </WeatherProvider>
    </ErrorBoundary>
  );
}