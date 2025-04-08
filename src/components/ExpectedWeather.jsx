import "./ExpectedWeather.css";
import ErrorBoundary from "./ErrorBoundary"
import Weather from "./Weather";

function ExpectedWeather({ data }) {
  // Format the time string to display only hours and minutes
  const formatTime = (timeString) => {
    const date = new Date(timeString)
    const options = { hour: '2-digit', minute: '2-digit' }
    return date.toLocaleTimeString("en-GB", options)
  };

  if(!data || !data.list || data.list.length < 6) {
    return <div>No weathe data available</div>;
  }
  
  return (
    <div className="expected-weather">
      <h2>Expected</h2>
      <ErrorBoundary>
      {weatherData.list.slice(1, 6).map((item, index) => (
        <Weather
          key={index}
          time={formatTime(item.dt_txt)}
          condition={item.main.temp}
          temperature={item.weather[0].main}
        />
      ))}
      </ErrorBoundary>
    </div>
  );
}

export default ExpectedWeather;
// This component is responsible for displaying the expected weather information