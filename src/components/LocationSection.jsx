import { useWeatherContext } from "../context/WeatherContext";
import { Skeleton } from "../components/Loading";

function LocationSection() {
  const { current, loading, error  } = useWeatherContext();

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

  return (
    <section className="location">
      <h2>
        <span className="question">Will you need a brolly in </span>
        {current.name}?
      </h2>
    </section>
  );
}

export default LocationSection;
// This component is responsible for displaying the answer to the question Do you need a brolly today?