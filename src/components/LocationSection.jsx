import { useWeatherContext } from "../context/WeatherContext";

function LocationSection() {
  const { current } = useWeatherContext();

  if (!current || !current.weather) {
    return <div>No weather data available</div>;
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