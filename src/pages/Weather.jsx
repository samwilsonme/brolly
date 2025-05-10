import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useWeather } from '../hooks/useWeather';
import { WeatherProvider } from '../context/WeatherContext';
import { UnitProvider } from '../context/UnitContext';

import { LocationSearchLink } from '../components/LocationSearch';
import LocationGeo from '../components/LocationGeo';
import WeatherBrolly from '../components/WeatherBrolly';
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherExpected from '../components/WeatherExpected';
import { UnitToggle } from '../components/UnitToggle';
import { ThemeToggle } from '../components/ThemeToggle';
import { ThemeDrawer } from '../components/ThemeDrawer';
import { Loading } from '../components/Loading';

import SVGlogo from '../assets/logo/brolly.svg?react';

import './Weather.css';

export function Weather() {
  const location = useLocation();
  const { state } = location;

  // Extract latitude and longitude from navigation state
  const queryLat = state?.lat;
  const queryLon = state?.lon;
  const queryName = state?.name;

  const { current, forecast, loading, error } = useWeather(queryLat, queryLon);

  if (loading) {
    return <Loading section="weather-page" />;
  }
  
  if (error) {
    throw new Error(error);
  }

  if (!current || !forecast || !forecast.list || forecast.list.length < 5) {
    throw new Error("Weather data incomplete.");
  }
  
  return (
    <UnitProvider>
      <WeatherProvider value={{ current, forecast, loading, error, name: queryName }}>
        <div className="weather-page">
          <header>
            <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
            <ThemeDrawer >
              <SVGlogo role="img" alt="Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance" />
            </ThemeDrawer>
            <div className="location-links">
              <LocationSearchLink type="icon" />
              <LocationGeo type="icon" />
            </div>
          </header>

          <main>
            <article className="brolly">
              <WeatherBrolly />
            </article>

            <aside className="weather">
              <WeatherCurrent />
              <WeatherExpected />
            </aside>
          </main>

          <footer>
            <ThemeToggle />
            <UnitToggle />
          </footer>
        </div>
      </WeatherProvider>
    </UnitProvider>
  );
}

