import { useWeatherContext } from "../context/WeatherContext";
import { Skeleton } from "../components/Loading";
import { useLocation } from "react-router-dom";
import info from "../assets/icons/info.svg";

function LocationSection() {
  const { current, loading, error } = useWeatherContext();
  const { state } = useLocation();
  const locationNameFromState = state?.name;

  if (loading) {
    return <Skeleton section="location" />;
    //return <div className="location"><p className="loading">Loading...</p></div>;
  }
  if (error) {
    return <div className="location"><p className="error">Error: {error}</p></div>;
  }
  if (!current || !current.weather) {
    return <div className="location"><p className="error">No weather data available</p></div>;
  }

  let locationText = current.name;
  let secondaryText = null;

  if (locationNameFromState && locationNameFromState !== current.name) {
    locationText = locationNameFromState;
    secondaryText = `Showing data for ${current.name}`;
  }

  return (
    <section className="location">
      <p className="question">Will you need an umbrella in </p>
      <div className="location-info">
        <h2>{locationText}?</h2>
        {secondaryText && <a data-tooltip={secondaryText} data-position="top" class="top data-icon"><img src={info} alt="Info"/></a>}
      </div>
    </section>
  );
}

export default LocationSection;