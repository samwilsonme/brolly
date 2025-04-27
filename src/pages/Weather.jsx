  import { useState, useEffect } from "react";
  import { useLocation } from "react-router-dom";
  
  import { useWeather } from "../hooks/useWeather";
  import { WeatherProvider } from "../context/WeatherContext";
  
  import { LocationSearchLink } from "../components/LocationSearch";
  import WeatherBrolly from "../components/WeatherBrolly";
  import WeatherCurrent from "../components/WeatherCurrent";
  import WeatherExpected from "../components/WeatherExpected";
  import { Loading } from "../components/Loading";
  
  import logo from "../assets/logo/brolly.svg";
  
  import "./Weather.css";
  
  export function Weather() {
    const location = useLocation();
    const { state } = location;
  
    // Extract latitude and longitude from navigation state
    const queryLat = state?.lat;
    const queryLon = state?.lon;
  
    const [locationName, setLocationName] = useState("");
  
    useEffect(() => {
      if (queryLat && queryLon) {
        setLocationName(`${parseFloat(queryLat).toFixed(2)},${parseFloat(queryLon).toFixed(2)}`);
      } else {
        setLocationName("");
        console.warn("No location data received via navigation state. Using default location.");
      }
    }, [queryLat, queryLon]);
  
    // Fetch weather data based on coordinates
    const { current, forecast, loading, error } = useWeather(queryLat, queryLon);
  
    if (loading) {
      return <Loading section="weather-page" />;
    }
  
    if (error) {
      return (
        <div className="weather-page">
          <p className="error">Error loading weather data.</p>
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

    /*
    //for future toast 
    const locationNameFromState = state?.name; // not sure if needed or if can uses something else

    let locationText = current.name;
    let secondaryText = null;

    if (locationNameFromState && locationNameFromState !== current.name) {
      locationText = locationNameFromState;
      secondaryText = `Showing data for ${current.name}`;
    }
    */
  
    return (
      <WeatherProvider value={{ current, forecast, loading, error, location: locationName }}>
        <main className="weather-page">
          <header>
            <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
            <img src={logo} alt="Brolly logo" />
            <LocationSearchLink type="icon" />
          </header>
  
          <div className="content">
            <article className="brolly">
              <WeatherBrolly />
            </article>
  
            <aside className="weather">
              <WeatherCurrent />
              <WeatherExpected />
            </aside>
          </div>
        </main>
      </WeatherProvider>
    );
  }
  