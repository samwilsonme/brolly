import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWeather } from "../hooks/useWeatherGeo";
import { WeatherProvider } from "../context/WeatherContext";
import LocationSection from "../components/LocationSectionGeo";
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

export function WeatherDisplay() {
  const [modal, setModal] = useState(false);
  const location = useLocation(); // Use useLocation to access the state
  const { state } = location; // Extract the state object
  const queryLat = state?.lat; // Access latitude from state
  const queryLon = state?.lon; // Access longitude from state
  const [locationName, setLocationName] = useState(""); // renamed

  useEffect(() => {
    if (queryLat && queryLon) {
      setLocationName(`${parseFloat(queryLat).toFixed(2)},${parseFloat(queryLon).toFixed(2)}`);
    } else {
      setLocationName(""); // Default if no data in state
      console.warn("No location data received via navigation state. Using default location.");
      // Optionally handle the case where no state is passed (e.g., redirect, display error)
    }
  }, [queryLat, queryLon]);

  // Fetch weather data using the latitude and longitude from the state
  const { current, forecast, loading: isWeatherLoading, error: weatherError } = useWeather(queryLat, queryLon);

  const isLoading = isWeatherLoading;
  const combinedError = weatherError;

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
        <p className="error">Error loading weather data.</p>
        {weatherError && <p className="error">{weatherError}</p>}
      </div>
    );
  }

  if (!forecast || !forecast.list || forecast.list.length < 5) {
    return (
      <div className="weather-page">
        <p className="error">No weather data available for {locationName}.</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <WeatherProvider value={{ current, forecast, loading: isLoading, error: combinedError, location: locationName }}>
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