import getWeatherIcon from "../utils/getWeatherIcon";

// This component is responsible for displaying the weather information 
// It takes uses data from a API and displays the weather condition and temperature
function Weather({time, condition, temperature, icon}) {
  const iconsrc = getWeatherIcon(icon);

  return (
    <div className="weather">
      {time && <h3>{time}</h3>}
      <img src={iconsrc} alt={condition} />
      <p>{Math.round(temperature)}°C</p>
    </div>
  );
}

export default Weather;

//Updated component to use weather icons