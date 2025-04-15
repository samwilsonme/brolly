import getWeatherIcon from "../utils/getWeatherIcon";

// This component is responsible for displaying the weather information 
// It takes uses data from a API and displays the weather condition and temperature
function Weather({time, condition, temperature, icon}) {
  const iconsrc = getWeatherIcon(icon);

  return (
    <div className="details">
      {time && <h4>{time}</h4>}
      <img src={iconsrc} alt={condition} />
      <p>{Math.round(temperature)}°c</p>
    </div>
  );
}

export default Weather;

//Updated component to use weather icons